import React from 'react'
import {Select} from 'antd'

//  events container data
export const events = [
  {
    title: 'Событие №1',
    desc: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.',
    date: '2019-04-11'
  },
  {
    title: 'Событие №2',
    desc: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.',
    date: '2019-04-11'
  },
  {
    title: 'Событие №3',
    desc: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.',
    date: '2019-04-11'
  },
  {
    title: 'Событие №4',
    desc: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.',
    date: '2019-04-11'
  },
  {
    title: 'Событие №5',
    desc: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.',
    date: '2019-04-11'
  },
]

// journal container data
const columns = [
        { title: '№', dataIndex: 'number'},
        { title: 'Фамилия', dataIndex: 'surname', initialEditValue: 'initial edit value'},
        { title: 'Имя', dataIndex: 'name' },
        { title: '01/09/2019', dataIndex: 'date1-09-2019'},
        { title: '02/09/2019', dataIndex: 'date2-09-2019'},
        { title: '03/09/2019', dataIndex: 'date3-09-2019'},
        { title: '04/09/2019', dataIndex: 'date4-09-2019'},
        { title: '05/09/2019', dataIndex: 'date5-09-2019'},
        { title: '06/09/2019', dataIndex: 'date6-09-2019'},
]

function handleChange(value) {
  console.log(`selected ${value}`)
}
const { Option } = Select

const cellContent = <Select defaultValue="attended" style={{ width: 70 }} onChange={handleChange}>
          <Option value="attended"><span role="img" aria-label="check">✔</span>️</Option>
          <Option value="absent"><span role="img" aria-label="cross">❌</span></Option>
          <Option value="five">5</Option>
          <Option value="four">4</Option>
          <Option value="three">3</Option>
          <Option value="two">2</Option>
        </Select>
const data = []

for (let i=1; i <= 30; i++) {
    const temp = {key: `${i-1}`, name: 'Raysultan', surname: 'Karimov', number: `${i}`}
    for (let g = 1; g <= 6; g++) {
        temp[`date${g}-09-2019`] = cellContent
    }
    data.push(temp)
}

export const journal= {
  columns,
  data
}

// have populate data as if it is send from server
// has to be sorted by surname
const serverData = [
  {
    id: '1',
    name: 'Иван',
    surname: 'Иванов',
    
  },

]

// timetable container data
export const timetable = [
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

export const tt_teacher = [
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

// subheader
export const subheader = [
  {
    name: '7A'
  },
  {
    name: '3Б'
  },
  {
    name: '11Г'
  },
  {
    name: '5Е'
  }
]

// header
export const header = [
  {
    name: 'Геометрия'
  },
  {
    name: 'Алгебра'
  },
  {
    name: 'Физика'
  }
]

// account
export const account = {
  name: 'Антон',
  surname: 'Забалотный',
  lastname: 'Генадьевич',
  birth: '09.04.1989',
  address: 'Красноярск, ул. Киренского 78б, кв. 31',
  phone: '+79618913285',
}

/*
  const markButtons = (
    <VerticalGridBlock>
      <CustomButton
        label="Поставить 5"
      />
      <CustomButton
        label="Поставить 4"
      />
      <CustomButton
        label="Поставить 3"
      />
      <CustomButton
        label="Поставить 2"
      />
    </VerticalGridBlock>
  )

  const attenButtons = (
    <VerticalGridBlock>
      <CustomButton
        label="Отметить об отсутствии без причины"
        theme="red"
        icon="frown"
      />
      <CustomButton
        label="Отметить об отсутствии по причине"
        theme="green"
        icon="smile"
      />
    </VerticalGridBlock>
  )
*/
 