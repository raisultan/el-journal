import styled from 'styled-components'

export const TableCard = styled.div`
  padding: 6px;
  height: 100%;
  width: 100%;
  box-shadow: 0 0.4px 0.6px 0 rgba(0,0,0,0.2);
`

export const TimeTableCardsWrapper = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr;
  grid-gap: 24px;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`