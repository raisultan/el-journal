import React from 'react'
import {
  Form, Icon, Input, Button, Checkbox,
} from 'antd'
import { 
  StyledCentererWrapper,
  StyledAuthWrapper,
  StyledCentererLabel,
  StyledRightAnchor
 } from './styled'

const NormalLoginForm = ({ form }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  const isSubmittable = (func) => func('userName') && func('password')

  const { getFieldDecorator, getFieldValue } = form
    
  return (
    <StyledCentererWrapper>
      <StyledAuthWrapper>
        <StyledCentererLabel>Войти в систему</StyledCentererLabel>
        <Form onSubmit={handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: 'Пожалуйста, введите имя пользователя!' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Имя пользователя" />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Пожалуйста, введите пароль!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Пароль" />
            )}
          </Form.Item>
          <Form.Item
          >
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: false,
            })(
              <Checkbox>Запомнить меня</Checkbox>
            )}
            <StyledRightAnchor>Забыли пароль?</StyledRightAnchor>
            <Button
              block
              type="primary"
              htmlType="submit" 
              className="login-form-button"
              disabled={!isSubmittable(getFieldValue)}  
            >
              Войти
            </Button>
          </Form.Item>
        </Form>
      </StyledAuthWrapper>
    </StyledCentererWrapper>
  )
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm)

export default WrappedNormalLoginForm 