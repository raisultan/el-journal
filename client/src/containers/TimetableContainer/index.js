import React, {Component} from 'react'
import { connect } from 'react-redux'
import {Spin} from 'antd'

import TimeTableCard from './components/TimeTableCard'
import { TimeTableCardsWrapper, StyledCentererWrapper } from './styled'
import { userActions } from '../../redux/actions/userActions'

class TimetableContainer extends Component {
  componentWillMount() {
    const {dispatch} = this.props
    dispatch(userActions.fetchTimeTable())
  }

  render() {
    const {timetable, pending, error} = this.props
    const cards = timetable.map(d => {
      return <TimeTableCard key={d.day} type='student' day={d.day} data={d.data}/>
    })

    return (
      <>
        {
          pending
          ?
          <StyledCentererWrapper>
            <Spin tip="Подгружаем расписание..." />
          </StyledCentererWrapper>
          :
          <TimeTableCardsWrapper>
            {cards}
          </TimeTableCardsWrapper>
        }
      </>
    )
  }
}

const mapStateToProps = state => {
  const {timetable, pending, error} = state.fetchTimeTable
  return {
    timetable,
    pending,
    error
  }
}

export default connect(mapStateToProps)(TimetableContainer)