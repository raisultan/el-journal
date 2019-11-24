import React from "react";
import { Typography } from "antd";

import { CenterBlock, StyledAccountCard } from "../styled";

const { Text } = Typography;

export default ({ user }) => {
  const { name, surname, lastname, birth, address, phone } = user;
  return (
    <CenterBlock>
      <StyledAccountCard>
        <Text>Фамилия: {surname}</Text> <br />
        <Text>Имя: {name}</Text> <br />
        <Text>Отчество: {lastname}</Text> <br />
        <Text>Дата рождения: {birth}</Text> <br />
        <Text>Адрес: {address}</Text> <br />
        <Text>Телефон: {phone}</Text> <br />
      </StyledAccountCard>
    </CenterBlock>
  );
};
