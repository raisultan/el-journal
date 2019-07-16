import React from 'react'

import { Table, Divider, Tag } from 'antd'

const { Column, ColumnGroup } = Table

export default ({columns, data}) => (<Table columns={columns} dataSource={data} />)

  