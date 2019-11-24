import React, { Component } from "react";
import { Layout, Menu, Icon } from "antd";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import { StyledLogoDiv } from "../styled";
import { pathDecoder } from "../../../utils";
import { history } from "../../../redux/helpers";
import { userActions } from "../../../redux/actions";
const { Sider } = Layout;

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedKey: [pathDecoder(history.location.pathname)] };
  }

  render() {
    const { theme, changeSubHeaderTitle } = this.props;

    const changeNavItem = key => {
      let keyName = "";
      if (key.key === "1") keyName = "journal";
      else if (key.key === "2") keyName = "timetable";
      else if (key.key === "3") keyName = "events";
      changeSubHeaderTitle(keyName);
    };

    return (
      <Sider breakpoint="lg" collapsedWidth="80" width={160} theme={theme}>
        <StyledLogoDiv />
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={this.state.selectedKey}
          onSelect={changeNavItem}
        >
          <Menu.Item key="1">
            <NavLink to="/layout/journal">
              <Icon type="book" />
              <span className="nav-text">Журнал</span>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="2">
            <NavLink to="/layout/timetable">
              <Icon type="calendar" />
              <span className="nav-text">Расписание</span>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="3">
            <NavLink to="/layout/events">
              <Icon type="idcard" />
              <span className="nav-text">События</span>
            </NavLink>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeSubHeaderTitle: value =>
      dispatch(userActions.changeSubHeaderTitle(value))
  };
};

export default connect(null, mapDispatchToProps)(Navigation);
