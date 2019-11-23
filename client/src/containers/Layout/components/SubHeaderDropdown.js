import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Menu, Dropdown, Icon } from 'antd'

import { AbsoluteDiv, RightMarginedSpan, BlueSpan } from '../styled'
import { userActions } from '../../../redux/actions'

const SubHeaderDropdown = ({label, tip, options, selectSubHeader, fetchJournal, subjectName}) => {
  const [value, setValue] = useState(tip)

  if(value !== tip) {
    let changeValue = true
    options.forEach(option => {
      if(option.name === value) changeValue = false
    })
    if(changeValue) setValue(tip)
  }

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
    selectSubHeader(val)
    fetchJournal(val, subjectName)
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
  const {value} = state.selectHeader
  const subjectName = value
  return {
    subjectName
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchJournal: (className, subjectName) => dispatch(userActions.fetchJournal(className, subjectName)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubHeaderDropdown)