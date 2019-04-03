import styled from 'styled-components'

export const StyledHeader = styled.div`
  height: 100%;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
`

export const AbsoluteDiv = styled.div`
  height: 100%;
`

export const RightMarginedSpan = styled.span`
  margin-right: ${props => props.size};
`

export const BlueSpan = styled.span`
  color: #1890ff;
  cursor: pointer;
`