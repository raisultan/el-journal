import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Layout } from 'antd'

import {userActions} from '../../../redux/actions'
import LabeledDropdown from '../components/LabeledDropdown'
import { StyledHeader, LeftAlignedBlock } from '../styled'
import { routeTranslator } from '../../../utils'
import { history } from '../../../redux/helpers'
import EventAddModal from '../../EventsContainer/containers/EventAddModal'

const { Header } = Layout

class SubHeader extends Component {
  state = {
    path: history.location.pathname
  }

 componentWillMount() {
    const { fetchSubHeader } = this.props
    fetchSubHeader()
  }
  render() {
    const {subheader, pending, error, changeSubHeader} = this.props

    const eventsPanel = (
      <>
        <LabeledDropdown
            label="Класс"
            tip="Выберите класс"
            options={subheader}
        />
        <EventAddModal
          butLabel="Добавить событие"
        />
      </>
    )

    const journalPanel = (
      <>
        <LabeledDropdown
            label="Класс"
            tip="Выберите класс"
            options={subheader}
            selectHeader={changeSubHeader}
        />
        {/* {attenButtons} */}
        {/* {markButtons} */}
      </>
    )

    const accountPanel = (
      <LeftAlignedBlock>
        <h2>Аккаунт</h2>
      </LeftAlignedBlock>
    )

    // todo: not changin while route is changing
    // consider creating an action, that will be called when route is changed
    const functionPanel = (routeName) => {
      if (routeName.includes('journal')) return journalPanel
      if (routeName.includes('events')) return eventsPanel
      if (routeName.includes('account')) return accountPanel
      else return null
    }

    return (
      <Header style={{ background: 'whitesmoke', padding: 0, height: '80px'}}>
        <StyledHeader>
          <h2>{routeTranslator(this.state.path)}</h2>
          {functionPanel(this.state.path)}
        </StyledHeader>
      </Header>
    )
  }
}

const mapStateToProps = state => {
  const {subheader, pending, error} = state.fetchSubHeader
  return {
    subheader,
    pending,
    error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchSubHeader: () => dispatch(userActions.fetchSubHeader()),
    changeSubHeader: value => dispatch(userActions.selectSubHeader(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubHeader)