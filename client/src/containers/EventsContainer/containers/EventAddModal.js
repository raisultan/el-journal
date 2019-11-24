import React from "react";
import { connect } from "react-redux";
import { Modal, Button } from "antd";

import EventAddForm from "./EventAddForm";
import { userActions } from "../../../redux/actions";

const EventAddModal = ({ butLabel, fetchEventList }) => {
  const modal = () =>
    Modal.info({
      title: "Добавить событие",
      width: "456px",
      okText: "Закрыть",
      content: (
        <>
          <EventAddForm
            addButLabel={"Добавить"}
            fetchEventListDispatcher={fetchEventList}
          />
        </>
      ),
      onOk() {}
    });

  return (
    <>
      <Button onClick={modal} icon={"plus"}>
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

export default connect(null, mapDispatchToProps)(EventAddModal);
