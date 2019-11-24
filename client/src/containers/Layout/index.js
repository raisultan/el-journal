import React, { Component } from "react";
import { connect } from "react-redux";
import { Layout } from "antd";
import { Route, Switch } from "react-router-dom";

import Navigation from "./components/Navigation";
import Header from "./containers/Header";
import SubHeader from "./containers/SubHeader";
import Footer from "./components/Footer";

import Journal from "../JournalContainer";
import Timetable from "../TimetableContainer";
import Events from "../EventsContainer";
import Account from "../AccountContainer";

import { userActions } from "../../redux/actions";
import { openNotification } from "../../utils";

const { Content } = Layout;

const layoutStyle = {
  minHeight: "100vh"
};

class LayoutContainer extends Component {
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(userActions.fetchSchoolInfo());
  }

  render() {
    const { schoolInfo, pending, error } = this.props;

    let schoolName = "";
    if (!pending && error === null && schoolInfo) schoolName = schoolInfo.name;

    return (
      <Layout style={layoutStyle}>
        <Navigation theme="light" />
        <Layout>
          {(!pending && schoolInfo === undefined) || error
            ? openNotification("Возникла ошибка!", error)
            : null}
          <Header label={schoolName} />
          <SubHeader />
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              style={{
                padding: 24,
                background: "#fff",
                minHeight: 360,
                height: "100%"
              }}
            >
              <Switch>
                <Route path="/layout/journal" component={Journal} />
                <Route path="/layout/timetable" component={Timetable} />
                <Route path="/layout/events" component={Events} />
                <Route path="/layout/account" component={Account} />
              </Switch>
            </div>
          </Content>
          <Footer label="ElJ ©2019" />
        </Layout>
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  const { schoolInfo, pending, error } = state.fetchSchoolInfo;
  return {
    schoolInfo,
    pending,
    error
  };
};

export default connect(mapStateToProps)(LayoutContainer);
