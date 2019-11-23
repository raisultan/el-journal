import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Spin} from 'antd'

import EditableTable from './components/SimpleTable'
import MarkDropDown from './components/MarkDropDown'
import { userActions } from '../../redux/actions/userActions'
import { StyledCentererWrapper } from './styled'
import { journalDataRearranger,
         getWeekAsDateStringsList,
         pullMarksToProperty,
         addAbsentDatesToMarksOfStudentObjects,
         makeWeekJournalColumnsFromDateStringList } from '../../utils/index'

const weekList = getWeekAsDateStringsList()

class JournalContainer extends Component {

  addCellContentToStudentsData = (journal) => {
    let studentsData = journalDataRearranger(journal)
    studentsData = pullMarksToProperty(studentsData)
    studentsData = addAbsentDatesToMarksOfStudentObjects(studentsData, weekList)
    weekList.forEach(date => {
      studentsData.forEach(student => {
        if (typeof(student[date]) !== 'undefined') {
          student[date].cellContent = <MarkDropDown mark={student[date]} />
        }
      })
    })
    console.log('ARRANGED', studentsData)
    return studentsData
  }

  render() {
    const {journal, pending, error} = this.props

    let columns = []
    let data = []

    if(Object.keys(journal).length !== 0 && journal.constructor !== Object) {
      data = this.addCellContentToStudentsData(journal)
      columns = makeWeekJournalColumnsFromDateStringList(weekList)
    }

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
          data={data}
          columns={columns}
          // columns = {journal.columns}
          // data = {journal.data}
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
    error,
  }
}

export default connect(mapStateToProps)(JournalContainer)