import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
import { connect } from "react-redux";

import PrivateRoute from "../../../shared/components/PrivateRoute";
import { history } from "../../../redux/helpers";
import Layout from "../../Layout";
import AuthForm from "../../Auth";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <PrivateRoute path="/layout" component={Layout} />
        <Route path="/auth" component={AuthForm} />
      </Router>
    );
  }
}

export default connect()(App);
