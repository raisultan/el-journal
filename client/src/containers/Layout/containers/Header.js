import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Layout } from 'antd'
import { Link } from 'react-router-dom'

import { StyledHeader, StyledAwayBlock } from '../styled'
import Dropdown from '../components/LabeledDropdown'
import CustomButton from '../components/CustomButton'
import { userActions } from '../../../redux/actions'

const { Header } = Layout

class MainHeader extends Component {
  componentWillMount() {
    const {dispatch} = this.props
    dispatch(userActions.fetchHeader())
  }

  render() {
    const {label, header, pending, error} = this.props
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
            options={header}
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
}

const mapStateToProps = state => {
  const {header, pending, error} = state.fetchHeader
  return {
    header,
    pending,
    error
  }
}

export default connect(mapStateToProps)(MainHeader)