import React from 'react'
import { Layout } from 'antd'
import { Route, Switch } from 'react-router-dom'

import Navigation from './components/Navigation'
import Header from './containers/Header'
import SubHeader from './containers/SubHeader'
import Footer from './components/Footer'

import Journal from '../JournalContainer'
import Timetable from '../TimetableContainer'
import Events from '../EventsContainer'
import Account from '../AccountContainer'

const { Content } = Layout

const layoutStyle = {
  minHeight: '100vh',
}

export default () => {
  return (
    <Layout
      style={layoutStyle}
    >
      <Navigation theme="light"/>
      <Layout>
        <Header label="School"/>
        <SubHeader />
        <Content style={{ margin: '24px 16px 0'}}>
          <div style={{ padding: 24, background: '#fff', minHeight: 360, height: '100%' }}>
            <Switch>
              <Route path="/layout/journal" component={Journal}/>
              <Route path="/layout/timetable" component={Timetable}/>
              <Route path="/layout/events" component={Events}/>
              <Route path="/layout/account" component={Account}/>
            </Switch>
          </div>
        </Content>
        <Footer label="ElJ ©2019" />
      </Layout>
    </Layout>
  )
}