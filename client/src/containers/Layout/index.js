import React from 'react'
import { Layout } from 'antd'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Navigation from './components/Navigation'
import Header from './components/Header'
import Footer from './components/Footer'

import Journal from '../JournalContainer'
import Timetable from '../TimetableContainer'
import Events from '../EventsContainer'

const { Content } = Layout

const layoutStyle = {
  height: '100vh',
}

export default () => {
  return (
    <BrowserRouter>
      <Layout
        style={layoutStyle}
      >
        <Navigation theme="light"/>
        <Layout>
          <Header label="School"/>
          <Content style={{ margin: '24px 16px 0'}}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360, height: '100%' }}>
              <Switch>
                <Route path="/journal" component={Journal}/>
                <Route path="/timetable" component={Timetable}/>
                <Route path="/events" component={Events}/>
              </Switch>
            </div>
          </Content>
          <Footer />
        </Layout>
      </Layout>
    </BrowserRouter>
  )
}