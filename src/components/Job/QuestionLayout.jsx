import styled from '@emotion/styled';
import colors from '../../constants/colors';
import dudo from '../../assets/dudo_mascot.svg';
import breakpoints from '../../constants/breakpoints';
import Content from './Content';
import rightArrowIcon from '../../assets/Icon/rightArrow.svg';
import { useNavigate } from 'react-router-dom';
import { PATH } from '../../routes/path';

export const QuestionLayout = ({ progressbarSrc, question = [], onClick, step }) => {

  const navigate = useNavigate();
  
  const goToNextPage = () => {
    navigate(`${PATH.JOB_ANSWER}/${step}`);
  };

  return (
    <Content>
      <Progressbar src={progressbarSrc} alt="step1" />
      <DudoImg src={dudo} alt="dudo" />
      <QuestionWrapper>
        {question.map((element, index) => (
          <Question key={index}>{element}</Question>
        ))}
      </QuestionWrapper>
      <RightArrow onClick={onClick}>
        <RightArrowIcon src={rightArrowIcon} alt="rightArrow" onClick={goToNextPage}/>
      </RightArrow>
    </Content>
  );
};

const DudoImg = styled.img`
  width: 200px;
  height: 200px;
  margin-top: 170px;

  @media (max-width: ${breakpoints.mobile}px) {
    width: 142px;
    height: 142px;
    margin-top: 120px;
  }
`;

const Progressbar = styled.img`
  width: 400px;

  @media (max-width: ${breakpoints.mobile}px) {
    width: 320px;
  }
`;

const QuestionWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: ${breakpoints.mobile}px) {
    margin-top: 24px;
  }
`;

const Question = styled.h1`
  font-size: 32px;
  line-height: 44.8px;
  margin: 0;
  @media (max-width: ${breakpoints.mobile}px) {
    font-size: 24px;
    font-weight: 700;
    line-height: 33.6px;
  }
`;

const RightArrow = styled.button`
  width: 120px;
  height: 120px;
  background-color: ${colors.secondary[90]};
  border-radius: 50%;
  bottom: 80px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 140px;

  @media (max-width: ${breakpoints.mobile}px) {
    width: 80px;
    height: 80px;
  }
`;

const RightArrowIcon = styled.img`
  width: 60px;
  height: 60px;
  color: ${colors.white};

  @media (max-width: ${breakpoints.mobile}px) {
    width: 26px;
    height: 40px;
  }
`;

export default QuestionLayout;