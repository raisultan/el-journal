import React from 'react'
import {connect} from 'react-redux'
import {Select} from 'antd'
import EditableTable from './components/SimpleTable'

const { Option } = Select

function handleChange(value) {
  console.log(`selected ${value}`)
}

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

const cellContent = <Select defaultValue="attended" style={{ width: 70 }} onChange={handleChange}>
      <Option value="attended"><span role="img" aria-label="check">✔</span>️</Option>
      <Option value="absent"><span role="img" aria-label="cross">❌</span></Option>
      <Option value="five">5</Option>
      <Option value="four">4</Option>
      <Option value="three">3</Option>
      <Option value="two">2</Option>
    </Select>

// number of students
const data = []
for (let i=1; i <= 30; i++) {
    const temp = {key: `${i-1}`, name: 'Raysultan', surname: 'Karimov', number: `${i}`}
    for (let g = 1; g <= 6; g++) {
        temp[`date${g}-09-2019`] = cellContent
    }
    data.push(temp)
}

const EditableTableContainer = ({dispatch}) => {
  return (
    <EditableTable
      columns={columns}
      data={data}
    />
  )
}

export default connect()(EditableTableContainer)