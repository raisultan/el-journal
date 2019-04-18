import React from 'react'
import { connect } from 'react-redux'

import EventCard from './components/EventCard'
import { EventsWrapper } from './styled'

const events = [
  {
    title: 'Событие №1',
    desc: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.',
    date: '12.09.2019 - 15.09.2019'
  },
  {
    title: 'Событие №2',
    desc: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.',
    date: '12.09.2019 - 15.09.2019'
  },
  {
    title: 'Событие №3',
    desc: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.',
    date: '12.09.2019 - 15.09.2019'
  },
  {
    title: 'Событие №4',
    desc: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.',
    date: '12.09.2019 - 15.09.2019'
  },
  {
    title: 'Событие №5',
    desc: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.',
    date: '12.09.2019 - 15.09.2019'
  },
]

const EventContainer = ({ dispatch }) => {
  
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
    <EventsWrapper>
      {cards}
    </ EventsWrapper>
  )
}

export default EventContainer