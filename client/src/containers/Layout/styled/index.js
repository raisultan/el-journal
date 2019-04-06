import styled from 'styled-components'

export const StyledHeader = styled.div`
  height: 100%;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const AbsoluteDiv = styled.div`
  height: auto;
`

export const RightMarginedSpan = styled.span`
  margin-right: ${props => props.size};
`

export const BlueSpan = styled.span`
  color: #1890ff;
  cursor: pointer;
`
export const VerticalGridBlock = styled.div`
  width: auto;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-auto-flow: column;
  grid-gap: 4px;
`

export const StyledLogoDiv = styled.img`
  width: 32px;
  height: 32px;
  margin: 16px;
`