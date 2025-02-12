import styled from "@emotion/styled";
import breakpoints from "../../constants/breakpoints";
import colors from "../../constants/colors";

export const AnswerOutput = ({ defaultValue = '', readOnly = true,  value = '' }) => {
  return (
    <OutputBox placeholder={defaultValue} readOnly={readOnly} >
      {value}
    </OutputBox>
  );
}

const OutputBox = styled.textarea`
  display: block;
  width: 100%;
  height: 346px;
  box-sizing: border-box;
  font-size: 24px;
  background-color: ${colors.white};
  color: ${colors.grayScale[100]};
  box-shadow: 0px 2px 4px 0px #937C5566;
  border-radius: 20px 20px 4px 20px;
  padding: 30px;
  resize: none;
  overflow-y: auto;
  border: none;

  &::placeholder {
    color: #aaa;
  }

  @media (max-width: ${breakpoints.mobile}px) {
    width: 327px;
    padding: 28px 24px;
    font-size: 18px;
  }
`;


export default AnswerOutput;