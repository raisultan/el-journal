import React from 'react'
import { Layout } from 'antd'
import { StyledHeader } from '../styled'
import Dropdown from '../components/LabeledDropdown'

const { Header } = Layout

const options = [
  {
    name: 'someoption 1'
  },
  {
    name: 'someoption 2'
  },
  {
    name: 'someoption 3'
  }
]

export default ({ label, showSubject }) => {
  const upperCaseLabel = label.toUpperCase();
  return (
    <Header style={{ background: '#fff', padding: 0,}}>
      <StyledHeader>
        <h2>{upperCaseLabel}</h2>
        <Dropdown 
          label="Предметы"
          options={options}
        />
      </StyledHeader>      
    </Header>
    
  )
}