import React from 'react'
import {Select } from 'antd'
import axios from 'axios'

import { openNotification } from '../../../utils/index'

const { Option } = Select

const MarkDropDown = ({mark}) => {

    function handleChange(value) {
        const token = localStorage.getItem('token')
        if(typeof(mark['id']) === 'undefined') {
            console.log(mark)
            const newMark = {
                value: value,
                date: mark.date,
                subject_id: mark.subject_id,
                student_id: mark.student_id,
            }

            axios.post(`http://localhost:8000/api/journal/marks/`, newMark, {headers: { 'Authorization': `Token ${token}` }})
            .then(res => {
                window.location.reload()
            })
            .catch(err => {
                console.log(err)
                openNotification('Возникла ощибка!', 'Обновите страницу и попробуйте заново. Если это не поможет обратитесь к администратору.')
            })
        } else {
            console.log('PATCH')
            axios.patch(`http://localhost:8000/api/journal/marks/${mark.id}/`, {value: value}, {headers: { 'Authorization': `Token ${token}` }})
            .then(res => {
                window.location.reload()
            })
            .catch(err => {
                console.log(err)
                openNotification('Возникла ощибка!', 'Обновите страницу и попробуйте заново. Если это не поможет обратитесь к администратору.')
            })
        }
    }

    return (
        <Select defaultValue={mark.value} style={{ width: 70 }} onChange={handleChange}>
            <Option value="PRE"><span role="img" aria-label="check">✔</span>️</Option>
            <Option value="ABS"><span role="img" aria-label="cross">❌</span></Option>
            <Option value="FIV">5</Option>
            <Option value="FOU">4</Option>
            <Option value="THR">3</Option>
            <Option value="TWO">2</Option>
        </Select>
    )
}

export default MarkDropDown