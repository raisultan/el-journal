import { notification } from 'antd'


export const routeTranslator = (routeName) => {
  if (routeName.includes('journal')) return 'Журнал'
  if (routeName.includes('timetable')) return 'Расписание'
  if (routeName.includes('events')) return 'События'
  else return null
}

export const pathDecoder = (pathName) => {
  if (pathName.includes('journal')) return 1
  if (pathName.includes('timetable')) return 2
  if (pathName.includes('events')) return 3
  else return null
}

export const dateTimeConverter = str => {
  const dateAndTime = str.split(' ')
  let convertedTime = str
  if(dateAndTime.length === 2) {
    let datePart = dateAndTime[0].split('-')
    let timePart = dateAndTime[1]
    convertedTime = `${datePart[2]}-${datePart[1]}-${datePart[0]}T${timePart}:00Z`
  }
  return convertedTime
}

export const prettifyDjangoDateTime = str => {
  const dateAndTime = str.split('T')
  const date = dateAndTime[0].split('-')
  const time = dateAndTime[1].slice(0, dateAndTime[1].length-4)
  return `${date[2]}.${date[1]}.${date[0]} ${time}`
}

export const prettifyInitialDjangoDateTime = str => {
  return str.replace('-', '.')
}

export const openNotification = (msg, desc) => {
  notification.open({
    message: msg,
    description: desc,
  })
}

export const dayOfWeekTranslator = str => {
  const tr_days = {
    MON: 'Понедельник',
    TUE: 'Вторник',
    WED: 'Среда',
    THU: 'Четверг',
    FRI: 'Пятница',
    SAT: 'Суббота',
  }
  return tr_days[str]
}