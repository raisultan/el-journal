import React from "react";
import { Table } from "antd";

const EditableTable = ({ columns, data }) => {
  return (
    <>
      <Table
        columns={columns}
        dataSource={data}
        size="small"
        scroll={{ x: true }}
        bordered
      />
    </>
  );
};

export default EditableTable;
