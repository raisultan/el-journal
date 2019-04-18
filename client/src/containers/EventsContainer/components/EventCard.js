import React from 'react'
import { Card, Icon } from 'antd'

import EventPreviewModal from './EventPreviewModal'

export default ({title, desc, date}) => {

  const { Meta } = Card
  const actions = [
    <span>Изменить <Icon type="edit" /></span>,
    <EventPreviewModal
      title={title}
      desc={desc}
      date={date}
      butLabel="Подробнее"
      icon="ellipsis"
    />
    // <span>Подробнее <Icon type="ellipsis" /></span>
  ]
  
  return (
    <Card
      style={{ width: '100%' }}
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