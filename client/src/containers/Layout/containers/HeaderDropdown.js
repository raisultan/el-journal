import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Menu, Dropdown, Icon } from 'antd'

import { AbsoluteDiv, RightMarginedSpan, BlueSpan } from '../styled'
import { pullStudentClassesFromHeader } from '../../../utils/index'

const LabeledDropdown = ({label, tip, options, selectHeader, enableSubHeader, header}) => {
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
    selectHeader(val)
    const studentClasses = pullStudentClassesFromHeader(header, val)
    enableSubHeader(studentClasses)
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

const mapStateToProps = state => {
  const {header} = state.fetchHeader
  return {
    header,
  }
}

export default connect(mapStateToProps)(LabeledDropdown)