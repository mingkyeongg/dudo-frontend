import styled from "@emotion/styled";
import colors from "../../constants/colors";

export const Button = ({ disabled = false, width = '100%', height = '100%', innerText = '', fontSize = '16px' }) => {
  return (
    <ButtonContainer disabled={disabled} width={width} height={height}>
      {innerText}
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div`
  background-color: ${({ disabled }) => (disabled ? `${colors.grayScale[30]}` : `${colors.secondary[90]}`)};
  color: ${colors.white};
  border-radius: 8px;
  padding: 10px;
  font-size: ${({ fontSize }) => fontSize};
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "100%"};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
`;

export default Button;
