import React from "react";
import { Modal, Button } from "antd";

const EventPreviewModal = ({ title, desc, date, butLabel, icon }) => {
  const modal = () =>
    Modal.info({
      title: title,
      content: (
        <>
          <br />
          <h4>Описание</h4>
          <p>{desc}</p>
          <br />
          <h4>Дата</h4>
          <p>{date}</p>
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

export default EventPreviewModal;
