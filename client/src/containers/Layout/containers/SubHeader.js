import React from 'react'
import { Layout } from 'antd'
import LabeledDropdown from '../components/LabeledDropdown'
import CustomButton from '../components/CustomButton'
import { StyledHeader, VerticalGridBlock } from '../styled'

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
export default () => {

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
        icon="dislike"
      />
      <CustomButton
        label="Отметить об отсутствии по причине"
        theme="green"
        icon="like"
      />
    </VerticalGridBlock>
  )

  return (
    <Header style={{ background: 'whitesmoke', padding: 0, height: '80px'}}>
      <StyledHeader>
        <h2>Subheader</h2>
        <LabeledDropdown
          label="Класс"
          tip="Выберите класс"
          options={options}
        />
        {markButtons}
        {attenButtons}
      </StyledHeader>      
    </Header>
  )
}