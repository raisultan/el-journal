import React from 'react'
import { Layout } from 'antd'
import { Link } from 'react-router-dom'

import { StyledHeader, StyledAwayBlock } from '../styled'
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
        <StyledAwayBlock width='210px'>
          <Link to="/layout/account">
            <CustomButton 
              label="Аккаунт"
              icon="user"
              action={null}
            />
          </Link>
          <Link to="/auth">
            <CustomButton 
              label="Выйти"
              icon="logout"
              action={userLogout}
            />
          </Link>
          
        </StyledAwayBlock>
      </StyledHeader>      
    </Header>
    
  )
}