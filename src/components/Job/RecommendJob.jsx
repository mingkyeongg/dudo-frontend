import QuestionLayout from './QuestionLayout';
import styled from '@emotion/styled';
import colors from '../../constants/colors';
import step1 from '../../assets/progressBar/step1.svg';
import breakpoints from '../../constants/breakpoints';
import AnswerLayout from './AnswerLayout';
import quitIcon from '../../assets/Icon/quit.svg';

export const RecommendJob = () => {

  return (
    <RecommendJobWrapper>
      <Header>
          <HeaderText>
            일자리 추천받기
          </HeaderText>
          <QuitIcon src={quitIcon} alt="quit" />
        </Header>
      <AnswerLayout question={['이전에 어떤 회사에서', '무슨 일을 하셨나요?']}/>
      {/* <QuestionLayout progressbarSrc={step1} question={['이전에 어떤 회사에서', '무슨 일을 하셨나요?']}/> */}
    </RecommendJobWrapper>
  );
}

const RecommendJobWrapper = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.secondary[10]};
  min-height: 100vh;
  box-sizing: border-box;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
`;

const HeaderText = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: ${colors.grayScale[100]};

  @media(max-width: ${breakpoints.mobile}px) {
    font-size: 16px;
  }
`;

const QuitIcon = styled.img`
  position: absolute;
  right: 28px;
  width: 20px;
  height: 20px;

  @media(max-width: ${breakpoints.mobile}px) {
    position: absolute;
    width: 15px;
    height: 15px;
    right: 28px;
  }
`;

export default RecommendJob;