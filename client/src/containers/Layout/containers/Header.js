import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Layout } from 'antd'
import { Link } from 'react-router-dom'

import { StyledHeader, StyledAwayBlock } from '../styled'
import Dropdown from './HeaderDropdown'
import CustomButton from '../components/CustomButton'
import { userActions } from '../../../redux/actions'

const { Header } = Layout

class MainHeader extends Component {
  componentWillMount() {
    const {fetchHeader} = this.props
    fetchHeader()
  }

  render() {
    const {label, header, pending, error, changeHeader, displaySubHeader, displayJournalToggle} = this.props
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
            selectHeader={changeHeader}
            enableSubHeader={displaySubHeader}
            displayJournal={displayJournalToggle}
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

const mapDispatchToProps = dispatch => {
  return {
    changeHeader: value => dispatch(userActions.selectHeader(value)),
    fetchHeader: () => dispatch(userActions.fetchHeader()),
    displaySubHeader: availableClasses => dispatch(userActions.displaySubHeader(availableClasses)),
    displayJournalToggle: value => dispatch(userActions.displayJournalToggle(value)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainHeader)