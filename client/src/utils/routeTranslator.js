export const routeTranslator = (routeName) => {
  switch (routeName) {
    case 'events':
      return 'События'
    case 'journal':
      return 'Журнал'
    case 'timetable':
      return 'Расписание'
    default:
      return null
  }
}