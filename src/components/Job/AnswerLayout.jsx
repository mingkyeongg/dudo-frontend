import styled from "@emotion/styled";
import breakpoints from "../../constants/breakpoints";
import colors from "../../constants/colors";
import Content from "./Content";
import AnswerOutput from "./AnswerOutput";
import Button from "../common/Button";

export const AnswerLayout = ({question = []}) => {
  return (
    <Content>
      <QuestionBox>
        {question.join(' ')}
      </QuestionBox>
      <AnswerOutput defaultValue="예시 : 00기업의 인사 관리 부서에서 
        근무했습니다. 주로 인재 채용, 교육 프로그램 개발, 직원 복지 관리 등의 업무를 담당했어요."/>
      <Button width="327px" height="48px" innerText="확인"/>
    </Content>
  );
}

const QuestionBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${colors.secondary[30]};
  border-radius: 20px 20px 20px 4px;

  @media (max-width: ${breakpoints.mobile}px) {
    width: 327px;
    height: 64px;
    font-size: 18px;
    font-weight: 700;
    line-height: 25.2px;
  }
`;

export default AnswerLayout;