import React from "react";
import { Table } from "antd";

import { TableCard } from "../styled";
import { dayOfWeekTranslator } from "../../../utils/index";

const { Column, ColumnGroup } = Table;

const TimeTableContainer = ({ day_of_week, lessons, class_name }) => {
  return (
    <TableCard>
      <Table dataSource={lessons} pagination={false}>
        <ColumnGroup title={dayOfWeekTranslator(day_of_week)}>
          <Column title="№" dataIndex="number" key="number" />
          <Column title="Предмет" dataIndex="subject_name" key="subject_name" />
          <Column title="Класс" dataIndex="class_name" key="class_name" />
          <Column title="Кабинет" dataIndex="cabinet" key="cabinet" />
          <Column title="Время" dataIndex="time" key="time" />
        </ColumnGroup>
      </Table>
    </TableCard>
  );
};

export default TimeTableContainer;
