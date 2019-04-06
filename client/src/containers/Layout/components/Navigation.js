import React from 'react'
import { Layout, Menu, Icon } from 'antd'
import { NavLink } from 'react-router-dom'
import { StyledLogoDiv } from '../styled'

const {  Sider, } = Layout

export default ({theme}) => {
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="80"        
      width={160}
      theme={theme}
    >
      <StyledLogoDiv src="../../../utils/img/logo.png" />
      <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">
          <NavLink to="/journal">
            <Icon type="book" />
            <span className="nav-text">Журнал</span>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="2">
          <NavLink to="/timetable">
            <Icon type="calendar" />
            <span className="nav-text">Расписание</span>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="3">
          <NavLink to="/events">
            <Icon type="idcard" />
            <span className="nav-text">События</span>
          </NavLink>
        </Menu.Item>
      </Menu>
    </Sider>
  )
}