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