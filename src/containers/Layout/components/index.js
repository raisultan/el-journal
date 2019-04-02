import React from 'react'
import { Layout, Menu, Icon } from 'antd'

const {
  Header, Content, Footer, Sider,
} = Layout

const layoutStyle = {
  height: '100vh',
}

export default () => {
  return (
    <Layout
      style={layoutStyle}
    >
      <Sider
        breakpoint="lg"
        collapsedWidth="80"        
        width={160}
        theme="light"
      >
        <div className="logo" />
        <Menu theme="light" mode="inline" defaultSelectedKeys={['4']}>
          <Menu.Item key="1">
            <Icon type="book" />
            <span className="nav-text">Журнал</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="calendar" />
            <span className="nav-text">Расписание</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="idcard" />
            <span className="nav-text">События</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }} />
        <Content style={{ margin: '24px 16px 0' }}>
          <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
            content
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          ElJ ©2018
        </Footer>
      </Layout>
    </Layout>
  )
}