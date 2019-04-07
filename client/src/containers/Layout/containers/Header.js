import React from 'react'
import { Layout } from 'antd'
import { StyledHeader } from '../styled'
import Dropdown from '../components/LabeledDropdown'

const { Header } = Layout

const options = [
  {
    name: 'Геометрия'
  },
  {
    name: 'Алгебра'
  },
  {
    name: 'Физика'
  }
]

export default ({ label, showSubject }) => {
  const upperCaseLabel = label.toUpperCase();
  return (
    <Header style={{ background: '#fff', padding: 0,}}>
      <StyledHeader>
        <h2>{upperCaseLabel}</h2>
        <Dropdown 
          label="Предмет"
          tip="Выберите предмет"
          options={options}
        />
      </StyledHeader>      
    </Header>
    
  )
}