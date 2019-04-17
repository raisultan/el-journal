import React from 'react'
import { connect } from 'react-redux'

import { headerActions } from '../../redux/actions'

const TimetableContainer = ({ dispatch }) => {
  dispatch(headerActions.changeRoute('timetable'))

  return (
    <>
      <h2>Timetable</h2>
    </>
  )
}

export default connect()(TimetableContainer)