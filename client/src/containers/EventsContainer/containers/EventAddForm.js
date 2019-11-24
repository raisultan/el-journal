import React, {useState} from 'react'
import {Form, Input, Button, Icon, DatePicker, Modal} from 'antd';
import axios from 'axios'

import {ButtonsWrapper} from '../styled'
import {dateTimeConverter, openNotification} from '../../../utils/index'
import {notificationConstants} from '../../../utils'

const {TextArea} = Input

const EventAddForm = ({
    form,
    title,
    desc,
    date,
    addButLabel,
    fetchEventListDispatcher,
}) => {
    const [eventDate,
        setEventDate] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        form.validateFields((err, values) => {
            if (
                values.title !== undefined &&
                values.description !== undefined &&
                values.title.trim() !== '' &&
                values.description.trim() !== '' &&
                eventDate !== undefined &&
                eventDate !== ''
            ) {
                if (!err) {
                    values = {
                        ...values,
                        date: dateTimeConverter(typeof(eventDate) === 'string'
                            ? eventDate
                            : eventDate._i)
                    }
                    console.log('Received values of form: ', values)
                    addEvent(values)
                    Modal.destroyAll()
                }
            } else {
                openNotification(...notificationConstants.EVENT_FIELDS_REQUIRED)
            }
        })
    }

    const addEvent = values => {
        const token = localStorage.getItem('token')
        axios
            .post(`http://localhost:8000/api/event/events/`, values, {
            headers: {
                'Authorization': `Token ${token}`
            }
        })
            .then(res => {
                fetchEventListDispatcher()
            })
            .catch(err => {
                console.log(err)
                openNotification(...notificationConstants.UNKNOWN_ERROR)
            })
    }

    const changeDate = (d, dString) => {
        setEventDate(dString)
    }

    const textAreaStyle = {
        resize: 'none',
        padding: '12px',
        lineHeight: '1.6'
    }

    const {getFieldDecorator} = form
    return (
        <Form onSubmit={handleSubmit} className="login-form">
            <Form.Item>
                {getFieldDecorator('title', {initialValue: title})(
                    <Input
                        prefix={< Icon type = "edit" style = {{ color: 'rgba(0,0,0,.25)' }}/>}
                        placeholder="Название"/>
                )}
            </Form.Item>
            <Form.Item>
                {getFieldDecorator('description', {initialValue: desc})(<TextArea autosize={true} style={textAreaStyle} placeholder="Описание"/>)}
            </Form.Item>
            <Form.Item>
                Дата события:
                <DatePicker
                    showTime
                    format='DD-MM-YYYY HH:mm'
                    onChange={changeDate}
                    placeholder="Выберите дату и время"/>
            </Form.Item>
            <Form.Item>
                <ButtonsWrapper>
                    <Button
                        type="primary"
                        htmlType='submit'
                        className="login-form-button"
                        onSubmit={handleSubmit}>
                        {addButLabel}
                    </Button>
                </ButtonsWrapper>
            </Form.Item>
        </Form>
    )
}

export default Form.create({name: 'addEventForm'})(EventAddForm)
