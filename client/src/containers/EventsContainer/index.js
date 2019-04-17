import React from 'react'

import EventCard from './components/EventCard'
import { EventsWrapper } from './styled'

const events = [
  {
    title: 'Событие №1',
    desc: 'Описание события...',
    date: '12.09.2019 - 15.09.2019'
  },
  {
    title: 'Событие №2',
    desc: 'Описание события...',
    date: '12.09.2019 - 15.09.2019'
  },
  {
    title: 'Событие №3',
    desc: 'Описание события...',
    date: '12.09.2019 - 15.09.2019'
  },
  {
    title: 'Событие №4',
    desc: 'Описание события...',
    date: '12.09.2019 - 15.09.2019'
  },
]

export default () => {

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