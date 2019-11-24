import styled from "styled-components";

export const EventsWrapper = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr;
  grid-gap: 24px;

  @media (max-width: 720px) {
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

export const ButtonsWrapper = styled.div`
  width: 55%;
  display: flex;
  justify-content: space-between;
`;
