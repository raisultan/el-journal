import styled from 'styled-components'

export const EventsWrapper = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr;
  grid-gap: 24px;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`