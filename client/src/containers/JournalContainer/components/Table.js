import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import cellEditFactory from 'react-bootstrap-table2-editor'

const EditableTable = ({columns, data}) => {

  return (
    <BootstrapTable
      keyField="id"
      data={ data }
      columns={ columns }
      cellEdit={ cellEditFactory({ mode: 'click' }) }
    />
  )
}


export default EditableTable