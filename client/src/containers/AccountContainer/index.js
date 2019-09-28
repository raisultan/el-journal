import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Spin} from 'antd'

import {userActions} from '../../redux/actions/userActions'
import AccountCard from './components/AccountCard'
import { CenterBlock } from './styled'

class AccountContainer extends Component {
  componentWillMount() {
    const {dispatch} = this.props
    dispatch(userActions.fetchAccount())
  }

  render() {
    const {account, pending, error} = this.props
    return (
      <CenterBlock>
        {
          pending
          ?
          <Spin tip="Подгружаем данные о пользователе..." />
          :
          <AccountCard user={account}/>
        }
      </CenterBlock>
    )
  }
}

const mapStateToProps = state => {
  const {account, pending, error} = state.fetchAccount
  return {
    account,
    pending,
    error
  }
}

export default connect(mapStateToProps)(AccountContainer)