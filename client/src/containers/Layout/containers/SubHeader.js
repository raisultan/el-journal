import React from 'react'
import { Layout } from 'antd'

import LabeledDropdown from '../components/LabeledDropdown'
import CustomButton from '../components/CustomButton'
import { StyledHeader, VerticalGridBlock } from '../styled'
import { routeTranslator } from '../../../utils'
import { history } from '../../../redux/helpers'

const { Header } = Layout

const options = [
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

const SubHeader = () => {

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

  const eventsPanel = (
    <>
      <LabeledDropdown
          label="Класс"
          tip="Выберите класс"
          options={options}
      />
      <CustomButton
        label="Добавить событие"
        icon="plus"
      />
    </>
  )

  const journalPanel = (
    <>
      <LabeledDropdown
          label="Класс"
          tip="Выберите класс"
          options={options}
      />
      {attenButtons}
      {markButtons}
    </>
  )

  const timetablePanel = (
      <LabeledDropdown
          label="Класс"
          tip="Выберите класс"
          options={options}
      />
  )

  const functionPanel = (routeName) => {
    if (routeName.includes('journal')) return journalPanel
    if (routeName.includes('timetable')) return timetablePanel
    if (routeName.includes('events')) return eventsPanel
    else return null
  }
    

  return (
    <Header style={{ background: 'whitesmoke', padding: 0, height: '80px'}}>
      <StyledHeader>
        <h2>{routeTranslator(history.location.pathname)}</h2>
        {functionPanel(history.location.pathname)}
      </StyledHeader>      
    </Header>
  )
}

export default SubHeader