import React from 'react'
import {Popconfirm} from 'antd'
const EditableContext = React.createContext()
export const columns = [
    { title: '№', field: 'number', editable: 'never'},
    { title: 'Surname', field: 'surname', initialEditValue: 'initial edit value' },
    { title: 'Name', field: 'name' },
    { title: '01/09/2019', field: 'date1-09-2019', editable: false,},
    { title: '02/09/2019', field: 'date2-09-2019', editable: false,},
    { title: '03/09/2019', field: 'date3-09-2019', editable: false,},
    { title: '04/09/2019', field: 'date4-09-2019', editable: false,},
    { title: '05/09/2019', field: 'date5-09-2019', editable: false,},
    { title: '06/09/2019', field: 'date6-09-2019', editable: false,},
    { title: '07/09/2019', field: 'date7-09-2019', editable: false,},
    { title: '08/09/2019', field: 'date8-09-2019', editable: false,},
    { title: '09/09/2019', field: 'date9-09-2019', editable: false,},
    { title: '10/09/2019', field: 'date10-09-2019', editable: false,},
    { title: '11/09/2019', field: 'date11-09-2019', editable: false,},
    { title: '12/09/2019', field: 'date12-09-2019', editable: false,},
    { title: '13/09/2019', field: 'date13-09-2019', editable: false,},
    { title: '14/09/2019', field: 'date14-09-2019', editable: false,},
    { title: '15/09/2019', field: 'date15-09-2019', editable: false,},
    { title: '16/09/2019', field: 'date16-09-2019', editable: false,},
    { title: '17/09/2019', field: 'date17-09-2019', editable: false,},
    { title: '18/09/2019', field: 'date18-09-2019', editable: false,},
    { title: '19/09/2019', field: 'date19-09-2019', editable: false,},
    { title: '20/09/2019', field: 'date20-09-2019', editable: false,},
    { title: '21/09/2019', field: 'date21-09-2019', editable: false,},
    { title: '22/09/2019', field: 'date22-09-2019', editable: false,},
    { title: '23/09/2019', field: 'date23-09-2019', editable: false,},
    { title: '24/09/2019', field: 'date24-09-2019', editable: false,},
    { title: '26/09/2019', field: 'date25-09-2019', editable: false,},
    { title: '27/09/2019', field: 'date26-09-2019', editable: false,},
    { title: '28/09/2019', field: 'date28-09-2019', editable: false,},
    { title: '29/09/2019', field: 'date29-09-2019', editable: false,},
    {
        title: 'operation',
        dataIndex: 'operation',
        render: (text, record) => {
          const { editingKey } = this.state;
          const editable = this.isEditing(record);
          return editable ? (
            <span>
              <EditableContext.Consumer>
                {form => (
                  <a
                    onClick={() => this.save(form, record.key)}
                    style={{ marginRight: 5 }}
                  >
                    Save
                  </a>
                )}
              </EditableContext.Consumer>
              <Popconfirm title="Sure to cancel?" onConfirm={() => this.cancel(record.key)}>
                <a>Cancel</a>
              </Popconfirm>
            </span>
          ) : (
            <a disabled={editingKey !== ''} onClick={() => this.edit(record.key)}>
              Edit
            </a>
          );
        },
      }
  ]

export const data = []

// number of students
for (let i=1; i <= 30; i++) {
    const temp = {name: 'Raysultan', surname: 'Karimov', number: `${i}`}
    for (let g = 1; g <= 29; g++) {
        temp[`date${i}-09-2019`] = ' '
    }
    data.push(temp)
}

// dataset for week
const columns = [
        { title: '№', dataIndex: 'number'},
        { title: 'Surname', dataIndex: 'surname', initialEditValue: 'initial edit value'},
        { title: 'Name', dataIndex: 'name' },
        { title: '01/09/2019', dataIndex: 'date1-09-2019'},
        { title: '02/09/2019', dataIndex: 'date2-09-2019'},
        { title: '03/09/2019', dataIndex: 'date3-09-2019'},
        { title: '04/09/2019', dataIndex: 'date4-09-2019'},
        { title: '05/09/2019', dataIndex: 'date5-09-2019'},
        { title: '06/09/2019', dataIndex: 'date6-09-2019'},

]

const cellContent = <Select defaultValue="attended" style={{ width: 70 }} onChange={handleChange}>
      <Option value="attended">✔️</Option>
      <Option value="absent">❌</Option>
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

// dataset for month
const columns = [
        { title: '№', dataIndex: 'number'},
        { title: 'Surname', dataIndex: 'surname', initialEditValue: 'initial edit value'},
        { title: 'Name', dataIndex: 'name' },
        { title: '01/09/2019', dataIndex: 'date1-09-2019', editable: true,},
        { title: '02/09/2019', dataIndex: 'date2-09-2019', editable: true,},
        { title: '03/09/2019', dataIndex: 'date3-09-2019', editable: true,},
        { title: '04/09/2019', dataIndex: 'date4-09-2019', editable: true,},
        { title: '05/09/2019', dataIndex: 'date5-09-2019', editable: true,},
        { title: '06/09/2019', dataIndex: 'date6-09-2019', editable: true,},
        { title: '07/09/2019', dataIndex: 'date7-09-2019', editable: true,},
        { title: '08/09/2019', dataIndex: 'date8-09-2019', editable: true,},
        { title: '09/09/2019', dataIndex: 'date9-09-2019', editable: true,},
        { title: '10/09/2019', dataIndex: 'date10-09-2019', editable: true,},
        { title: '11/09/2019', dataIndex: 'date11-09-2019', editable: true,},
        { title: '12/09/2019', dataIndex: 'date12-09-2019', editable: true,},
        { title: '13/09/2019', dataIndex: 'date13-09-2019', editable: true,},
        { title: '14/09/2019', dataIndex: 'date14-09-2019', editable: true,},
        { title: '15/09/2019', dataIndex: 'date15-09-2019', editable: true,},
        { title: '16/09/2019', dataIndex: 'date16-09-2019', editable: true,},
        { title: '17/09/2019', dataIndex: 'date17-09-2019', editable: true,},
        { title: '18/09/2019', dataIndex: 'date18-09-2019', editable: true,},
        { title: '19/09/2019', dataIndex: 'date19-09-2019', editable: true,},
        { title: '20/09/2019', dataIndex: 'date20-09-2019', editable: true,},
        { title: '21/09/2019', dataIndex: 'date21-09-2019', editable: true,},
        { title: '22/09/2019', dataIndex: 'date22-09-2019', editable: true,},
        { title: '23/09/2019', dataIndex: 'date23-09-2019', editable: true,},
        { title: '24/09/2019', dataIndex: 'date24-09-2019', editable: true,},
        { title: '26/09/2019', dataIndex: 'date25-09-2019', editable: true,},
        { title: '27/09/2019', dataIndex: 'date26-09-2019', editable: true,},
        { title: '28/09/2019', dataIndex: 'date28-09-2019', editable: true,},
        { title: '29/09/2019', dataIndex: 'date29-09-2019', editable: true,},
]

const cellContent = <Select defaultValue="attended" style={{ width: 70 }} onChange={handleChange}>
      <Option value="attended">✔️</Option>
      <Option value="absent">❌</Option>
      <Option value="five">5</Option>
      <Option value="four">4</Option>
      <Option value="three">3</Option>
      <Option value="two">2</Option>
    </Select>

// number of students
const data = []
for (let i=1; i <= 30; i++) {
    const temp = {key: `${i-1}`, name: 'Raysultan', surname: 'Karimov', number: `${i}`}
    for (let g = 1; g <= 29; g++) {
        temp[`date${g}-09-2019`] = cellContent
    }
    data.push(temp)
}

