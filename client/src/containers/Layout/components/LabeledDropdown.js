import React, { useState } from 'react'
import { Menu, Dropdown, Icon } from 'antd'
import { AbsoluteDiv, RightMarginedSpan, BlueSpan } from '../styled';

export default ({label, tip, options}) => {
  const [value, setValue] = useState(tip)

  const dropMenu = options.map( opt => (
      <Menu.Item key={opt.name} onClick={e => handleChange(opt.name)}>
        <span>{opt.name}</span>
      </Menu.Item>
  ))
  
  const menu = (
    <Menu selectable>
      {dropMenu}
    </Menu>
  )

  const tipLabel = (
    <RightMarginedSpan size="6px">
        {label}:
      </RightMarginedSpan>
  )

  const handleChange = val => {
    setValue(val)
  }

  return (
    <AbsoluteDiv>
      {tipLabel}
      <Dropdown overlay={menu} trigger={['click']}>
        <BlueSpan className="ant-dropdown-link">
          {value} <Icon type="down" />
        </BlueSpan>
      </Dropdown>
    </ AbsoluteDiv>
  )
}