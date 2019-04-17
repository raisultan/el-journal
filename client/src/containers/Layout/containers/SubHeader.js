import React from 'react'
import { Layout } from 'antd'
import { connect } from 'react-redux'

import LabeledDropdown from '../components/LabeledDropdown'
import CustomButton from '../components/CustomButton'
import { StyledHeader, VerticalGridBlock } from '../styled'
import { routeTranslator } from '../../../utils/routeTranslator'

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

/**
 * todo: needs to be added conditional rendering
 * for set of functions. According to routes, those will be different.
 */
const SubHeader = ({currentRoute}) => {

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
    switch (routeName) {
      case 'events':
        return eventsPanel
      case 'journal':
        return journalPanel
      case 'timetable':
        return timetablePanel
      default:
        return null
    }
    
  }

  return (
    <Header style={{ background: 'whitesmoke', padding: 0, height: '80px'}}>
      <StyledHeader>
        <h2>{routeTranslator(currentRoute)}</h2>
        {functionPanel(currentRoute)}
      </StyledHeader>      
    </Header>
  )
}

const mapStateToProps = state => {
  const { currentRoute } = state.routes
  return {
      currentRoute
  }
}

export default connect(mapStateToProps)(SubHeader)