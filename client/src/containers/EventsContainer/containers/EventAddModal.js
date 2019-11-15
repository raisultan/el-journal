import React from 'react'
import { Modal, Button } from 'antd'

import EventAddForm from './EventAddForm'

const EventAddModal = ({butLabel}) => {
  const modal = () => Modal.info({
    title: 'Добавить событие',
    width: '456px',
    okText: 'Закрыть',
    content: (
      <>
        <EventAddForm
          title={""}
          desc={""}
          addButLabel={"Добавить"}
        />
      </>
    ),
    onOk() {},
  })

  return (
    <>
      <Button
        onClick={modal}
        icon={"plus"}
      >{butLabel}</Button>
    </>
  )
}

export default EventAddModal