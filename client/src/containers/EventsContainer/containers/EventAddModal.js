import React from 'react'
import { Modal, Button } from 'antd'

import EventEditForm from './EventEditForm'

const EventAddModal = ({butLabel}) => {
  const modal = () => Modal.info({
    title: 'Добавить событие',
    width: '456px',
    okText: 'Закрыть',
    content: (
      <>
        <EventEditForm
          title={""}
          desc={""}
          okButLabel={"Добавить"}
          cancelButLabel={"Отменить"}
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