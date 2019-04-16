import React, { Component } from 'react'
import { Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import { alertActions } from '../../../redux/actions'
import { PrivateRoute } from '../../../shared/components'
import { history } from '../../../redux/helpers'
import Layout from '../../Layout'
import AuthForm from '../../Auth'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);

    const { dispatch } = this.props;
    history.listen((location, action) => {
        // clear alert on location change
        dispatch(alertActions.clear());
    });
}

  render() {
    return (
      <Router history={history}>
          <>
            <PrivateRoute exact path="/" component={Layout} />
            <Route path="/auth" component={AuthForm} />
          </>
      </Router>
    )
  }
}

function mapStateToProps(state) {
  const { alert } = state;
  return {
      alert
  };
}

export default connect(mapStateToProps)(App)
