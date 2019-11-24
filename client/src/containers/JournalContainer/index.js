import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Spin} from 'antd'

import EditableTable from './components/SimpleTable'
import MarkDropDown from './components/MarkDropDown'
import { StyledCentererWrapper } from './styled'
import { journalDataRearranger,
         getWeekAsDateStringsList,
         pullMarksToProperty,
         addAbsentDatesToMarksOfStudentObjects,
         makeWeekJournalColumnsFromDateStringList,
         compareSurnames, 
         openNotification} from '../../utils/index'

const weekList = getWeekAsDateStringsList()

class JournalContainer extends Component {

  addCellContentToStudentsData = (journal, sorterFunc) => {
    let studentsData = journalDataRearranger(journal)
    studentsData = pullMarksToProperty(studentsData)
    studentsData = addAbsentDatesToMarksOfStudentObjects(studentsData, weekList)
    weekList.forEach(date => {
      studentsData.forEach(student => {
        if (typeof(student[date]) !== 'undefined') {
          student[date].cellContent = <MarkDropDown mark={student[date]}/>
        }
      })
    })
    console.log('ARRANGED', studentsData)
    studentsData.sort(sorterFunc)
    return studentsData
  }

  render() {
    const {journal, pending, error, displayJournal} = this.props

    let columns = []
    let data = []

    if(journal && journal.data && Object.keys(journal.data).length !== 0 && journal.data.constructor !== Object) {
      data = this.addCellContentToStudentsData(journal.data, compareSurnames)
      columns = makeWeekJournalColumnsFromDateStringList(weekList)
    }

    const renderingComponent = () => {
      let comp = <EditableTable
            data={data}
            columns={columns}
        />

      if (!displayJournal) {
        console.log('DISPLAY JOURNAL', displayJournal)
        comp = <StyledCentererWrapper>
            <h2>Для вывода журнала выберите соответствующие предмет и класс!</h2>
          </StyledCentererWrapper>
      } else if(pending) {
        comp = <StyledCentererWrapper>
          <Spin tip="Подгружаем журнал..." />
        </StyledCentererWrapper>
      }

      return comp
    }

    return (
      <>
      {
        error
        ?
        openNotification('Возникла ошибка!', error)
        :
        renderingComponent()
      }
      </>
    )
  }
}

const mapStateToProps = state => {
  const {journal, pending, error} = state.fetchJournal
  const {displayJournal} = state.displayJournal
  return {
    journal,
    pending,
    error,
    displayJournal,
  }
}

export default connect(mapStateToProps)(JournalContainer)