import styled from "styled-components";

export const TableCard = styled.div`
  height: 100%;
  width: 100%;
  border: 1px solid #d4d6db;
`;
export const TimeTableCardsWrapper = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr;
  grid-gap: 24px;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`;

export const StyledCentererWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
