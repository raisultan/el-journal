import React from 'react'
import {connect} from 'react-redux'
import EditableTable from './components/Table'

const columns = [{
  dataField: 'id',
  text: 'Product ID'
}, {
  dataField: 'name',
  text: 'Product Name'
}, {
  dataField: 'price',
  text: 'Product Price'
}];

const data = [
  {
    id: 1,
    name: 'Ivan Petrov',
    price: 500
  },
  {
    id: 2,
    name: 'Ivan Petrov',
    price: 500
  },
  {
    id: 3,
    name: 'Ivan Petrov',
    price: 500
  },
]

const EditableTableContainer = ({dispatch}) => {

  return (
    <EditableTable
      data={ data }
      columns={ columns }
    />
  )
}


export default connect()(EditableTableContainer)