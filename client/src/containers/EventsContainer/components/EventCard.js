import React from 'react'
import { Card } from 'antd'

import EventPreviewModal from './EventPreviewModal'
import EventEditModal from '../containers/EventEditModal'

export default ({title, desc, date}) => {
  const { Meta } = Card
  const actions = [
    <EventEditModal
      title={title}
      desc={desc}
      date={date}
      butLabel="Изменить"
      icon="edit"
    />,
    <EventPreviewModal
      title={title}
      desc={desc}
      date={date}
      butLabel="Подробнее"
      icon="ellipsis"
    />
  ]
  
  return (
    <Card
      actions={actions}
    >
      <Meta
        title={title}
        description={desc}
      />
      <br />
      {date}
    </Card>
  )
}