import React, { useState } from "react";
import { Form, Input, Button, Icon, DatePicker, Modal } from "antd";
import moment from "moment";
import axios from "axios";

import { ButtonsWrapper } from "../styled";
import { dateTimeConverter, openNotification } from "../../../utils/index";

const { TextArea } = Input;

const EventEditForm = ({
  form,
  title,
  desc,
  date,
  event_id,
  editButLabel,
  deleteButLabel,
  fetchEventListDispatcher
}) => {
  const [eventDate, setEventDate] = useState(date);

  const handleSubmit = e => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        values = {
          ...values,
          date: dateTimeConverter(
            typeof eventDate === "string" ? eventDate : eventDate._i
          )
        };
        const token = localStorage.getItem("token");
        axios
          .patch(
            `http://localhost:8000/api/event/events/${event_id}/`,
            values,
            { headers: { Authorization: `Token ${token}` } }
          )
          .then(res => {
            fetchEventListDispatcher();
            Modal.destroyAll();
          })
          .catch(err => {
            openNotification(
              "Возникла ошибка!",
              "Возникла ошибка при редактировании события."
            );
          });
      }
    });
  };

  const deleteEvent = e => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    axios
      .delete(`http://localhost:8000/api/event/events/${event_id}/`, {
        headers: { Authorization: `Token ${token}` }
      })
      .then(res => {
        fetchEventListDispatcher();
        Modal.destroyAll();
      })
      .catch(err => {
        openNotification(
          "Возникла ошибка!",
          "Возникла ошибка при удалении события."
        );
      });
  };

  const changeDate = (d, dString) => {
    setEventDate(dString);
  };

  const textAreaStyle = {
    resize: "none",
    padding: "12px",
    lineHeight: "1.6"
  };

  const { getFieldDecorator } = form;
  return (
    <Form onSubmit={handleSubmit} className="login-form">
      <Form.Item>
        {getFieldDecorator("title", { initialValue: title })(
          <Input
            prefix={<Icon type="edit" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="Название"
          />
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator("id", { initialValue: event_id })(
          <Input
            prefix={<Icon type="edit" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="ID"
          />
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator("description", { initialValue: desc })(
          <TextArea
            autosize={true}
            style={textAreaStyle}
            placeholder="Описание"
          />
        )}
      </Form.Item>
      <Form.Item>
        Дата события:{" "}
        <DatePicker
          showTime
          format="DD-MM-YYYY HH:mm"
          defaultValue={moment(date)}
          onChange={changeDate}
          placeholder="Выберите дату"
        />
      </Form.Item>
      <Form.Item>
        <ButtonsWrapper>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            onSubmit={handleSubmit}
          >
            {editButLabel}
          </Button>
          <Button
            type="danger"
            className="login-form-button"
            onClick={deleteEvent}
          >
            {deleteButLabel}
          </Button>
        </ButtonsWrapper>
      </Form.Item>
    </Form>
  );
};

export default Form.create({ name: "editEventForm" })(EventEditForm);
