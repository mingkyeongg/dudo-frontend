import styled from "@emotion/styled";
import breakpoints from "../../constants/breakpoints";
import colors from "../../constants/colors";

export const AnswerOutput = ({ defaultValue = '', disable = true }) => {
  return (
    <OutputBox>
      {defaultValue}
    </OutputBox>
  );
}

const OutputBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  font-size: 24px;
  background-color: ${colors.white};
  color: ${colors.grayScale[40]};
  box-shadow: 0px 2px 4px 0px #937C5566;
  border-radius: 20px 20px 4px 20px;

  @media (max-width: ${breakpoints.mobile}px) {
    width: 327px;
    min-height: 346px;
    padding: 28px 24px;
    font-size: 18px;
  }
`;

export default AnswerOutput;