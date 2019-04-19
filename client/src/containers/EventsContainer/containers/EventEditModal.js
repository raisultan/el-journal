import React from 'react'
import { Modal, Button } from 'antd'

import EventEditForm from './EventEditForm'

const EventEditModal = ({title, desc, date, butLabel, icon}) => {
  const modal = () => Modal.info({
    title: 'Изменение события',
    width: '456px',
    okText: 'Закрыть',
    content: (
      <>
        <EventEditForm
          title={title}
          desc={desc}
          date={date}
        />
      </>
    ),
    onOk() {},
  })

  return (
    <>
      <Button
        onClick={modal}
        icon={icon}
      >{butLabel}</Button>
    </>
  )
}

export default EventEditModal