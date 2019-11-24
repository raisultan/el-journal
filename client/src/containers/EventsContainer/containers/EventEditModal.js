import React from "react";
import { connect } from "react-redux";
import { Modal, Button } from "antd";

import EventEditForm from "./EventEditForm";
import { userActions } from "../../../redux/actions";

const EventEditModal = ({
  title,
  desc,
  date,
  butLabel,
  icon,
  event_id,
  fetchEventList
}) => {
  const modal = () =>
    Modal.info({
      title: "Изменение события",
      width: "456px",
      okText: "Закрыть",
      content: (
        <>
          <EventEditForm
            title={title}
            desc={desc}
            date={date}
            event_id={event_id}
            editButLabel={"Изменить"}
            deleteButLabel={"Удалить"}
            fetchEventListDispatcher={fetchEventList}
          />
        </>
      ),
      onOk() {}
    });

  return (
    <>
      <Button onClick={modal} icon={icon}>
        {butLabel}
      </Button>
    </>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    fetchEventList: () => dispatch(userActions.fetchEventList())
  };
};

export default connect(null, mapDispatchToProps)(EventEditModal);
