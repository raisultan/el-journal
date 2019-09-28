import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Spin} from 'antd'

import EditableTable from './components/SimpleTable'
import { userActions } from '../../redux/actions/userActions'
import { StyledCentererWrapper } from './styled'

class JournalContainer extends Component {
  componentWillMount() {
    const {dispatch} = this.props
    dispatch(userActions.fetchJournal())
  }

  render() {
    const {journal, pending, error} = this.props

    return (
      <>
      {
        pending
        ?
        <StyledCentererWrapper>
          <Spin tip="Подгружаем журнал..." />
        </StyledCentererWrapper>
        :
        <EditableTable
          columns={journal.columns}
          data={journal.data}
        />
      }
      </>
    )
  }
}

const mapStateToProps = state => {
  const {journal, pending, error} = state.fetchJournal
  return {
    journal,
    pending,
    error
  }
}

export default connect(mapStateToProps)(JournalContainer)