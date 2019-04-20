import React, { useState } from 'react'
import { Input, Radio } from 'antd'
import { StyledSearchBlock, StyledHorizontalBlock } from '../styled'

const Search = Input.Search

const TimeTableSearchBlock = () => {
  const [searchValue, setSearchValue] = useState('')
  const [radioValue, setRadioValue] = useState('teacher')

  const handleSearch = (value) => {
    const values = {searchValue, radioValue}
    console.log('SearchBar received values: ',  values)
  }

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value)
  }

  const handleRadioChange = (e) => {
    setRadioValue(e.target.value)
  }

  const radioGroupStyle = {lineHeight: '40px'}
  const searchTextStyle = {...radioGroupStyle, marginRight: '10px'}

  return (
    <StyledSearchBlock>
      <Search
        placeholder="Поиск расписания"
        onSearch={handleSearch}
        onChange={handleSearchChange}
        size="small"
        enterButton
      />
      <StyledHorizontalBlock>
        <span style={searchTextStyle}>Ищем расписание для  </span>
        <Radio.Group
          onChange={handleRadioChange}
          defaultValue="teacher"
          buttonStyle="solid" size="small"
          style={radioGroupStyle}
        >
          <Radio.Button value="teacher">Учитель</Radio.Button>
          <Radio.Button value="class">Класс</Radio.Button>
        </Radio.Group>
      </ StyledHorizontalBlock>
    </StyledSearchBlock>
  )
}

export default TimeTableSearchBlock