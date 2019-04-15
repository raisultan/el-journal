import React from 'react'
import { Layout, Button } from 'antd'
import { StyledHeader } from '../styled'
import Dropdown from '../components/LabeledDropdown'
import CustomButton from '../components/CustomButton'

import { userActions } from '../../../redux/actions'

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

  const userLogout = () => {
    userActions.logout()
    window.location.reload()
  }

  return (
    <Header style={{ background: '#fff', padding: 0,}}>
      <StyledHeader>
        <h2>{upperCaseLabel}</h2>
        <Dropdown 
          label="Предмет"
          tip="Выберите предмет"
          options={options}
        />
        <CustomButton 
          label="Выйти из аккаунта"
          icon="logout"
          action={userLogout}
        />
      </StyledHeader>      
    </Header>
    
  )
}