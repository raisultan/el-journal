import React from 'react'
import { connect } from 'react-redux'

import { headerActions } from '../../redux/actions'

const JournalContainer = ({ dispatch }) => {
  dispatch(headerActions.changeRoute('journal'))

  return (
    <>
      <h2>Journal</h2>
    </>
  )
}

export default connect()(JournalContainer)