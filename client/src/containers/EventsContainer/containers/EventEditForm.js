import React from 'react'
import {
  Form, Input, Button, Icon,
} from 'antd';

import { ButtonsWrapper } from '../styled'

const { TextArea } = Input

const EventEditForm = ({form, title, desc, date}) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
      }
    });
  }

  const textAreaStyle = {
    resize: 'none',
    padding: '12px',
    lineHeight: '1.6',
  }

  const { getFieldDecorator } = form
  return (
    <Form onSubmit={handleSubmit} className="login-form">
      <Form.Item>
        {getFieldDecorator('title', {initialValue: title})(
          <Input prefix={<Icon type="edit" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Название" />
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('desc', {initialValue: desc})(
          <TextArea autosize={true} style={textAreaStyle} placeholder="Описание" />
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('date', {initialValue: date})(
          <Input prefix={<Icon type="edit" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Дата" />
        )}
      </Form.Item>
      <Form.Item>
        <ButtonsWrapper>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Изменить
          </Button>
          <Button type="danger" htmlType="submit" className="login-form-button">
              Удалить
          </Button>
        </ButtonsWrapper>
      </Form.Item>
    </Form>
  )
}

export default Form.create({ name: 'editform' })(EventEditForm)
