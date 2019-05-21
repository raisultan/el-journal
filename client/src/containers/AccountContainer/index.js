import React from 'react'

import AccountCard from './components/AccountCard'

const user = {
  name: 'Антон',
  surname: 'Забалотный',
  lastname: 'Генадьевич',
  birth: '09.04.1989',
  address: 'Красноярск, ул. Киренского 78б, кв. 31',
  phone: '+79618913285',
}

export default () => {
  return (
    <AccountCard user={user}/>
  )
}