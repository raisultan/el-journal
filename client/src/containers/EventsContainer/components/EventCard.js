import React from 'react'
import { Card } from 'antd'

import EventPreviewModal from './EventPreviewModal'
import EventEditModal from '../containers/EventEditModal'
import { prettifyDjangoDateTime } from '../../../utils/index'

export default ({title, desc, date, event_id}) => {
  const { Meta } = Card
  const actions = [
    <EventEditModal
      title={title}
      desc={desc}
      date={date}
      event_id={event_id}
      butLabel="Изменить"
      icon="edit"
    />,
    <EventPreviewModal
      title={title}
      desc={desc}
      date={prettifyDjangoDateTime(date)}
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
      {prettifyDjangoDateTime(date)}
    </Card>
  )
}