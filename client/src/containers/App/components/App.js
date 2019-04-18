import React, { Component } from 'react'
import { Router, Route } from 'react-router-dom'

import { PrivateRoute } from '../../../shared/components'
import { history } from '../../../redux/helpers'
import Layout from '../../Layout'
import AuthForm from '../../Auth'
import './App.css'

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <PrivateRoute exact path="/" component={Layout} />
        <Route path="/auth" component={AuthForm} />
      </Router>
    )
  }
}

export default App
