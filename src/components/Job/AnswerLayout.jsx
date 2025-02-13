import styled from "@emotion/styled";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import breakpoints from "../../constants/breakpoints";
import colors from "../../constants/colors";
import Content from "./Content";
import AnswerOutput from "./AnswerOutput";
import Button from "../common/Button";
import { Spacer } from "../common/Spacer";
import doubleArrowLeft from "../../assets/Icon/doubleArrowLeft.svg";
import micAnimation from "../../assets/animation/mic.json";
import { PATH } from "../../routes/path";
import Lottie from "lottie-react";
import restart from "../../assets/Icon/restart.svg";
import { useAtom } from "jotai";
import { jobAtom } from "../../store/job";

export const AnswerLayout = ({ question = [], answerDefault = '', step }) => {
  const [isListening, setIsListening] = useState(false);
  const [ jobState, setJobState ] = useAtom(jobAtom);
  const answer = jobState.answer;
  console.log(answer);
  const [transcript, setTranscript] = useState(answer[parseInt(step) - 1]);
  const speechRecognizerRef = useRef(null);
  const timeoutRef = useRef(null);
  const navigate = useNavigate();
  const isMobile = window.innerWidth < breakpoints.mobile;
  const recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const [readOnly, setReadOnly] = useState(true);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const lottieRef = useRef(null);
  const [isRestart, setIsRestart] = useState(false);

  useEffect(() => {
    if (!recognition) {
      alert("이 브라우저는 음성 인식을 지원하지 않습니다.");
      return;
    }

    if (answer[parseInt(step) - 1]) {
      setIsRestart(true);
    }

    speechRecognizerRef.current = new recognition();
    speechRecognizerRef.current.continuous = true;
    speechRecognizerRef.current.interimResults = true;
    speechRecognizerRef.current.lang = "ko-KR";

    speechRecognizerRef.current.onresult = (event) => {
      const result = Array.from(event.results)
        .map((res) => res[0].transcript)
        .join(" ");
      setTranscript(result);
    };

    speechRecognizerRef.current.onerror = (event) => {
      console.error("음성 인식 오류:", event.error);
    };

    return () => {
      speechRecognizerRef.current?.abort();
    };
  }, []);

  const startListening = () => {
    if (speechRecognizerRef.current) {
      setIsListening(true);
      setButtonDisabled(true);
      setIsRestart(false);
      setTranscript("");
      speechRecognizerRef.current.start();

      timeoutRef.current = setTimeout(() => {
        stopListening();
        setIsRestart(false);
      }, 60000);
    }
  };

  const stopListening = () => {
    if (speechRecognizerRef.current) {
      setIsListening(false);
      speechRecognizerRef.current.stop();
      setButtonDisabled(false);
      setIsRestart(true);

      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    }
  };

  const clickButtonHandler = () => {
    isListening ? stopListening() : startListening();
  };

  const handleBack = () => {
    navigate(`${PATH.JOB_QUESTION}/${step || 1}`);
  };

  const handleEdit = () => {
    setReadOnly(false);
  };

  const goToNextPage = () => {
    navigate(`${PATH.JOB_QUESTION}/${parseInt(step) + 1}`);
  };
  

  const handleTextChange = () => {
  };

  console.log("현재 상태:", answer[parseInt(step) - 1]);

  useEffect(() => {
    if (lottieRef.current) {
      if (isListening) {
        lottieRef.current.play();
      } else {
        lottieRef.current.stop();
      }
    }
  }, [isListening]);


  return (
    <Content>
      <QuestionBox>{question.join(' ')}</QuestionBox>
      <Spacer height={18} />
      <AnswerOutput
        defaultValue={answerDefault}
        value={transcript}
        readOnly={readOnly}
        onChange={handleTextChange}
        step={step}
      />

      <Spacer height={18} />
      <ButtonContainer>
        <Button width={isMobile ? "156px" : "100%"} height="48px" innerText="수정" disabled={buttonDisabled} onClick={handleEdit} />
        <Button width={isMobile ? "156px" : "100%"} height="48px" innerText="확인" disabled={buttonDisabled} onClick={goToNextPage} />
      </ButtonContainer>
      <Spacer height={28} />
      <Footer>
        <BackIcon src={doubleArrowLeft} onClick={handleBack} />
        {isRestart ?
        <RestartIconWrapper>
          <RestartIcon 
            src={restart} 
            onClick={clickButtonHandler} 
          />
        </RestartIconWrapper>
        : <Lottie
          animationData={micAnimation}
          lottieRef={lottieRef}
          style={{ height: isMobile ? "80px" : "100px", cursor: "pointer", outline: "none", WebkitTapHighlightColor: "transparent"}}
          onClick={clickButtonHandler}
        />
      }
      </Footer>
    </Content>
  );
};

const RestartIconWrapper = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.secondary[90]};
  justify-self: center;
  align-self: center;

  @media (max-width: ${breakpoints.mobile}px) {
    width: 80px;
    height: 80px;
  }
`;

const RestartIcon = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

const QuestionBox = styled.div`
  display: flex;
  width: 450px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${colors.secondary[30]};
  border-radius: 20px 20px 20px 4px;
  padding: 18px;
  box-sizing: border-box;
  font-size: 22px;
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