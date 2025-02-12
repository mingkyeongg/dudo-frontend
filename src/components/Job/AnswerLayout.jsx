import styled from "@emotion/styled";
import breakpoints from "../../constants/breakpoints";
import colors from "../../constants/colors";
import Content from "./Content";
import AnswerOutput from "./AnswerOutput";
import Button from "../common/Button";
import { Spacer } from "../common/Spacer";
import doubleArrowLeft from "../../assets/Icon/doubleArrowLeft.svg";
import { useState, useEffect } from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import micAnimation from "../../assets/animation/mic.json";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../routes/path";

export const AnswerLayout = ({question = [], answerDefault = '', step}) => {
  const [isListening, setIsListening] = useState(false);
  const navigate = useNavigate();
  const [transcript, setTranscript] = useState("");
  const recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  let speechRecognizer = null;
  const isMobile = window.innerWidth < breakpoints.mobile;

  useEffect(() => {
    if (!recognition) {
      alert("이 브라우저는 음성 인식을 지원하지 않습니다.");
      return;
    }

    speechRecognizer = new recognition();
    speechRecognizer.continuous = true; // 실시간 인식 유지
    speechRecognizer.interimResults = true; // 중간 결과도 표시
    speechRecognizer.lang = "ko-KR"; // 한국어 설정

    speechRecognizer.onresult = (event) => {
      const result = Array.from(event.results)
        .map((res) => res[0].transcript)
        .join(" ");
      setTranscript(result);
    };

    speechRecognizer.onerror = (event) => {
      console.error("음성 인식 오류:", event.error);
    };

    return () => {
      speechRecognizer.abort();
    };
  }, []);

  let timeoutId = null; // setTimeout ID 저장

  const startListening = () => {
    if (speechRecognizer) {
      setIsListening(true);
      speechRecognizer.start();

      timeoutId = setTimeout(() => {
        stopListening();
      }, 60000);
    }
  };

  const stopListening = () => {
    if (speechRecognizer) {
      setIsListening(false);
      speechRecognizer.stop();

      // ⏹️ 타이머가 설정되어 있으면 취소
      if (timeoutId !== null) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }
    }
  };

  const handleBack = () => {
    navigate(`${PATH.JOB_QUESTRION}/${step}`);
  }


  return (
    <Content>
      <QuestionBox>
        {question.join(' ')}
      </QuestionBox>
      <Spacer height={18} />
      <AnswerOutput defaultValue={answerDefault}>
          {transcript}
        </AnswerOutput>
      <Spacer height={18} />
      <ButtonContainer>
        <Button width={isMobile ? "156px" : "100%"} height="48px" innerText="수정" fontSize={isMobile ? "16px" : "24px"}/>
        <Button width={isMobile ? "156px" : "100%"} height="48px" innerText="확인" fontSize={isMobile ? "16px" : "24px"}/>
      </ButtonContainer>
      <Spacer height={28} />
      <Footer>
        <BackIcon src={doubleArrowLeft} onClick={handleBack}/>
        <DotLottieReact 
          data={micAnimation}
          loop
          autoplay
          style={{ height: "80px" }}
        />
      </Footer>
    </Content>
  );
};

const QuestionBox = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${colors.secondary[30]};
  border-radius: 20px 20px 20px 4px;
  padding: 24px;
  box-sizing: border-box;
  font-size: 24px;
  font-weight: 700;
  outline: none;

  @media (max-width: ${breakpoints.mobile}px) {
    width: 327px;
    height: 64px;
    font-size: 18px;
    font-weight: 700;
    line-height: 25.2px;
    padding: 18px 16px;
  }
`;

const Footer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  width: 100%;
  margin-top: 24px;
`;

const BackIcon = styled.img`
  width: 32px;
  height: 32px;
  cursor: pointer;
  align-self: center;
  justify-self: center;

  @media (max-width: ${breakpoints.mobile}px) {
    width: 24px;
    height: 24px;
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;
  justify-content: space-between;
`;


export default AnswerLayout;