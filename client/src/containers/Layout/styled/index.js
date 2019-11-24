import styled from "styled-components";

export const StyledHeader = styled.div`
  height: 100%;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AbsoluteDiv = styled.div`
  height: auto;
`;

export const RightMarginedSpan = styled.span`
  margin-right: ${props => props.size};
`;

export const BlueSpan = styled.span`
  color: #1890ff;
  cursor: pointer;
`;
export const VerticalGridBlock = styled.div`
  width: auto;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-auto-flow: column;
  grid-gap: 4px;
`;

export const StyledLogoDiv = styled.div`
  height: 32px;
  background: whitesmoke;
  margin: 16px;
`;

export const StyledSearchBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledHorizontalBlock = styled.div`
  display: flex;
  flex-direction: row;
`;
export const StyledAwayBlock = styled.div`
  width: ${props => props.width};
  display: flex;
  justify-content: space-between;
`;

export const LeftAlignedBlock = styled.div`
  width: 100%;
`;
