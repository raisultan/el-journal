import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Layout from '../../Layout'
import AuthForm from '../../Auth'
import './App.css'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/auth" component={AuthForm} />
          <Route path="/layout" component={Layout} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
