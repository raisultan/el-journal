import React from 'react'
import {
  Form, Icon, Input, Button,
} from 'antd'
import { StyledCentererWrapper, StyledAuthWrapper } from './styled'

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class VerticalLoginForm extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render () {
    const {
      getFieldDecorator, getFieldsError, getFieldError, isFieldTouched,
    } = this.props.form

    const userNameError = isFieldTouched('userName') && getFieldError('userName')
    const passwordError = isFieldTouched('password') && getFieldError('password')

    return (
      <StyledCentererWrapper>
        <StyledAuthWrapper>
          <h3>Логин</h3>
          <Form layout="horizontal" onSubmit={this.handleSubmit}>
            <Form.Item
              validateStatus={userNameError ? 'error' : ''}
              help={userNameError || ''}
            >
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: 'Пожалуйста, введите имя пользователя!' }],
              })(
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Имя пользователя" />
              )}
            </Form.Item>
            <Form.Item
              validateStatus={passwordError ? 'error' : ''}
              help={passwordError || ''}
            >
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Пожалуйста, введите ваш пароль!' }],
              })(
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Пароль" />
              )}
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                disabled={hasErrors(getFieldsError())}
              >
                Войти
              </Button>
            </Form.Item>
          </Form>
        </StyledAuthWrapper>
      </StyledCentererWrapper>
    )
  }
}

const WrappedVerticalLoginForm = Form.create({ name: 'vertical_login' })(VerticalLoginForm)

export default WrappedVerticalLoginForm