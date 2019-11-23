import React, { useState } from 'react'
import { Menu, Dropdown, Icon } from 'antd'

import { AbsoluteDiv, RightMarginedSpan, BlueSpan } from '../styled'

const SubHeaderDropdown = (
  {
    label, tip, options, selectSubHeader,
    fetchJournal, subjectName, displayJournalToggle
  }
) => {

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
    displayJournalToggle(true)
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

export default SubHeaderDropdown