import { headerConstants } from '../constants'
import { history } from '../helpers' 

export const headerActions = {
  changeRoute,
}

function changeRoute (route) {
  //history.push(`/${route}`)
  return {
    type: headerConstants.CHANGE_ROUTE,
    route,
  }
}