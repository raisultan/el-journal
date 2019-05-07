import React from 'react'
import { Table } from 'antd'

import { TableCard } from '../styled'

const { Column, ColumnGroup } = Table

const TimeTableContainer = ({type, day, data}) => {
  return (
  <TableCard>
    <Table dataSource={data} pagination={false}>
      <ColumnGroup title={day}>
        <Column
          title="№"
          dataIndex="number"
          key="number"
        />
        <Column
          title="Предмет"
          dataIndex="subject"
          key="subject"
        />
        {
          type === 'student' ?
          <Column
          title="Учитель"
          dataIndex="teacher"
          key="teacher"
          /> : null
        }
        <Column
          title="Кабинет"
          dataIndex="cab"
          key="cab"
        />
        <Column
          title="Время"
          dataIndex="time"
          key="time"
      />
      </ColumnGroup>
    </Table>
  </TableCard>
  )
}

export default TimeTableContainer