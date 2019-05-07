import React from 'react'
import { connect } from 'react-redux'

import TimeTableCard from './components/TimeTableCard'
import { TimeTableCardsWrapper } from './styled'

const tt_student = [
  {
    day: 'Понедельник',
    data: [{
      key: '1',
      number: '1',
      subject: 'Химия',
      teacher: 'В. И. Ивановна',
      cab: '312',
      time: '10:15 - 12:00'
    },
    {
      key: '2',
      number: '2',
      subject: 'Математика',
      teacher: 'В. И. Ивановна',
      cab: '100',
      time: '10:15 - 12:00'
    },
    {
      key: '3',
      number: '3',
      subject: 'Биология',
      teacher: 'В. И. Ивановна',
      cab: '100',
      time: '10:15 - 12:00'
    },
    {
      key: '4',
      number: '4',
      subject: 'Труд',
      teacher: 'В. И. Ивановна',
      cab: '100',
      time: '10:15 - 12:00'
    }
    ]
  },
  {
    day: 'Вторник',
    data: [{
      key: '1',
      number: '1',
      subject: 'Химия',
      teacher: 'В. И. Ивановна',
      cab: '312',
      time: '10:15 - 12:00'
    },
    {
      key: '2',
      number: '2',
      subject: 'Математика',
      teacher: 'В. И. Ивановна',
      cab: '100',
      time: '10:15 - 12:00'
    },
    {
      key: '3',
      number: '3',
      subject: 'Биология',
      teacher: 'В. И. Ивановна',
      cab: '100',
      time: '10:15 - 12:00'
    },
    {
      key: '4',
      number: '4',
      subject: 'Труд',
      teacher: 'В. И. Ивановна',
      cab: '100',
      time: '10:15 - 12:00'
    }
    ]
  },
  {
    day: 'Среда',
    data: [{
      key: '1',
      number: '1',
      subject: 'Химия',
      teacher: 'В. И. Ивановна',
      cab: '312',
      time: '10:15 - 12:00'
    },
    {
      key: '2',
      number: '2',
      subject: 'Математика',
      teacher: 'В. И. Ивановна',
      cab: '100',
      time: '10:15 - 12:00'
    },
    {
      key: '3',
      number: '3',
      subject: 'Биология',
      teacher: 'В. И. Ивановна',
      cab: '100',
      time: '10:15 - 12:00'
    },
    {
      key: '4',
      number: '4',
      subject: 'Труд',
      teacher: 'В. И. Ивановна',
      cab: '100',
      time: '10:15 - 12:00'
    }
    ]
  },
  {
    day: 'Четверг',
    data: [{
      key: '1',
      number: '1',
      subject: 'Химия',
      teacher: 'В. И. Ивановна',
      cab: '312',
      time: '10:15 - 12:00'
    },
    {
      key: '2',
      number: '2',
      subject: 'Математика',
      teacher: 'В. И. Ивановна',
      cab: '100',
      time: '10:15 - 12:00'
    },
    {
      key: '3',
      number: '3',
      subject: 'Биология',
      teacher: 'В. И. Ивановна',
      cab: '100',
      time: '10:15 - 12:00'
    },
    {
      key: '4',
      number: '4',
      subject: 'Труд',
      teacher: 'В. И. Ивановна',
      cab: '100',
      time: '10:15 - 12:00'
    }
    ]
  },
  {
    day: 'Пятница',
    data: [{
      key: '1',
      number: '1',
      subject: 'Химия',
      teacher: 'В. И. Ивановна',
      cab: '312',
      time: '10:15 - 12:00'
    },
    {
      key: '2',
      number: '2',
      subject: 'Математика',
      teacher: 'В. И. Ивановна',
      cab: '100',
      time: '10:15 - 12:00'
    },
    {
      key: '3',
      number: '3',
      subject: 'Биология',
      teacher: 'В. И. Ивановна',
      cab: '100',
      time: '10:15 - 12:00'
    },
    {
      key: '4',
      number: '4',
      subject: 'Труд',
      teacher: 'В. И. Ивановна',
      cab: '100',
      time: '10:15 - 12:00'
    }
    ]
  }
]

const tt_teacher = [
  {
    day: 'Понедельник',
    data: [{
      key: '1',
      number: '1',
      subject: 'Химия',
      cab: '312',
      time: '10:15 - 12:00'
    },
    {
      key: '2',
      number: '2',
      subject: 'Математика',
      cab: '100',
      time: '10:15 - 12:00'
    },
    {
      key: '3',
      number: '3',
      subject: 'Биология',
      cab: '100',
      time: '10:15 - 12:00'
    },
    {
      key: '4',
      number: '4',
      subject: 'Труд',
      cab: '100',
      time: '10:15 - 12:00'
    }
    ]
  },
  {
    day: 'Вторник',
    data: [{
      key: '1',
      number: '1',
      subject: 'Химия',
      cab: '312',
      time: '10:15 - 12:00'
    },
    {
      key: '2',
      number: '2',
      subject: 'Математика',
      cab: '100',
      time: '10:15 - 12:00'
    },
    {
      key: '3',
      number: '3',
      subject: 'Биология',
      cab: '100',
      time: '10:15 - 12:00'
    },
    {
      key: '4',
      number: '4',
      subject: 'Труд',
      cab: '100',
      time: '10:15 - 12:00'
    }
    ]
  },
  {
    day: 'Среда',
    data: [{
      key: '1',
      number: '1',
      subject: 'Химия',
      cab: '312',
      time: '10:15 - 12:00'
    },
    {
      key: '2',
      number: '2',
      subject: 'Математика',
      cab: '100',
      time: '10:15 - 12:00'
    },
    {
      key: '3',
      number: '3',
      subject: 'Биология',
      cab: '100',
      time: '10:15 - 12:00'
    },
    {
      key: '4',
      number: '4',
      subject: 'Труд',
      cab: '100',
      time: '10:15 - 12:00'
    }
    ]
  },
  {
    day: 'Четверг',
    data: [{
      key: '1',
      number: '1',
      subject: 'Химия',
      cab: '312',
      time: '10:15 - 12:00'
    },
    {
      key: '2',
      number: '2',
      subject: 'Математика',
      cab: '100',
      time: '10:15 - 12:00'
    },
    {
      key: '3',
      number: '3',
      subject: 'Биология',
      cab: '100',
      time: '10:15 - 12:00'
    },
    {
      key: '4',
      number: '4',
      subject: 'Труд',
      cab: '100',
      time: '10:15 - 12:00'
    }
    ]
  },
  {
    day: 'Пятница',
    data: [{
      key: '1',
      number: '1',
      subject: 'Химия',
      cab: '312',
      time: '10:15 - 12:00'
    },
    {
      key: '2',
      number: '2',
      subject: 'Математика',
      cab: '100',
      time: '10:15 - 12:00'
    },
    {
      key: '3',
      number: '3',
      subject: 'Биология',
      cab: '100',
      time: '10:15 - 12:00'
    },
    {
      key: '4',
      number: '4',
      subject: 'Труд',
      cab: '100',
      time: '10:15 - 12:00'
    }
    ]
  }
]

const cards = tt_teacher.map(d => {
  return <TimeTableCard key={d.day} type='teacher' day={d.day} data={d.data}/>
})

const TimetableContainer = ({ dispatch }) => {
  return (
    <TimeTableCardsWrapper>
      {cards}
    </TimeTableCardsWrapper>
  )
}

export default connect()(TimetableContainer)