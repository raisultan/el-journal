import React from 'react'
import { Menu, Dropdown, Icon } from 'antd'
import { AbsoluteDiv } from '../styled';

export default ({label, options}) => {
  const dropMenu = options.map( opt => (
      <Menu.Item key={opt.name}>
        <a target="_blank" rel="noopener noreferrer" href="#">{opt.name}</a>
      </Menu.Item>
  ))
  
  const menu = (
    <Menu>
      {dropMenu}
    </Menu>
  )

  return (
    <AbsoluteDiv>
      <Dropdown overlay={menu} trigger={['click']}>
        <a className="ant-dropdown-link" href="#">
          {label} <Icon type="down" />
        </a>
      </Dropdown>
    </ AbsoluteDiv>
  )
}