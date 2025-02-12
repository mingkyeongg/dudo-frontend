import styled from "@emotion/styled";

export const Spacer = ({ height = 0 }) => {
  return (
    <SpacerContainer height={height} />
  );
}

const SpacerContainer = styled.div`
  height: ${({ height }) => height}px;
`;
