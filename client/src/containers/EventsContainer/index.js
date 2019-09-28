import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Spin} from 'antd'

import {userActions} from '../../redux/actions/userActions'
import EventCard from './components/EventCard'
import { EventsWrapper, StyledCentererWrapper } from './styled'

// todo: требуется компонент, который будет отображаться при ошибке
class EventContainer extends Component {
 componentWillMount() {
    const {dispatch} = this.props
    dispatch(userActions.fetchEvents())
  }

  render() {
    const {events, error, pending} = this.props
    const cards = (
      events.map((event) => (
        <EventCard
          key={event.title}
          title={event.title}
          desc={event.desc}
          date={event.date}
        />
      ))
    )

    return (
      <StyledCentererWrapper>
        {
          pending ? <Spin tip="Подгружаем события..." />
          :
          <EventsWrapper>
            {cards}
          </EventsWrapper>
        }
      </StyledCentererWrapper>
    )
  }
}

const mapStateToProps = state => {
  const {events, pending, error} = state.fetchEvents
  return {
    events,
    pending,
    error
  }
}

export default connect(mapStateToProps)(EventContainer)