import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Layout } from 'antd'

import {userActions} from '../../../redux/actions'
import LabeledDropdown from '../components/SubHeaderDropdown'
import { StyledHeader } from '../styled'
import { routeTranslator } from '../../../utils'
import { history } from '../../../redux/helpers'
import EventAddModal from '../../EventsContainer/containers/EventAddModal'

const { Header } = Layout

class SubHeader extends Component {
  render() {
    const {changeSubHeader, value, studentClasses, subHeaderTitle,
           subjectName, displayJournalToggle, fetchJournal, className} = this.props
    const displaySubHeader = value

    const eventsPanel = (
        <EventAddModal
          butLabel="Добавить событие"
        />
    )

    const journalPanel = (
      !displaySubHeader ?
      <p>First pick subject</p>
      :
      <LabeledDropdown
          label="Класс"
          tip="Выберите класс"
          options={studentClasses}
          selectSubHeader={changeSubHeader}
          fetchJournal={fetchJournal}
          subjectName={subjectName}
          displayJournalToggle={displayJournalToggle}
          initialClassName={className}
      />
    )

    const functionPanel = (title) => {
      if (title === 'journal') return journalPanel
      if (title === 'events') return eventsPanel
      else return null
    }

    return (
      <Header style={{ background: 'whitesmoke', padding: 0, height: '80px'}}>
        <StyledHeader>
          <h2>{routeTranslator(subHeaderTitle)}</h2>
          {functionPanel(subHeaderTitle)}
        </StyledHeader>
      </Header>
    )
  }
}

const mapStateToProps = state => {
  const {value, studentClasses} = state.displaySubHeader
  const {subjectName} = state.selectHeader
  const {subHeaderTitle} = state.changeSubHeaderTitle
  const { className } = state.selectSubHeader
  return {
    value,
    studentClasses,
    subjectName,
    subHeaderTitle,
    className,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeSubHeader: value => dispatch(userActions.selectSubHeader(value)),
    fetchJournal: (className, subjectName) => dispatch(userActions.fetchJournal(className, subjectName)),
    displayJournalToggle: value => dispatch(userActions.displayJournalToggle(value)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubHeader)