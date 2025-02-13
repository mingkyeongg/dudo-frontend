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
import { PATH } from "../../routes/path";
import restart from "../../assets/Icon/restart.svg";
import { useAtom } from "jotai";
import { jobAtomWithPersistence } from "../../store/job";
import VoiceProgress from "./VoiceProgress.jsx";
import { confirmAtom } from "../../store/modal";
import { useSetAtom } from "jotai";
import Confirm from "../common/Modal/Confirm";

export const AnswerLayout = ({ question = [], answerDefault = '', step }) => {
  const [isListening, setIsListening] = useState(false);
  const [ jobState, setJobState ] = useAtom(jobAtomWithPersistence);
  const answer = jobState.answer;
  const value = JSON.parse(sessionStorage.getItem("jobState")) || "";
  const [transcript, setTranscript] = useState(value.answer[parseInt(step) - 1]);
  const speechRecognizerRef = useRef(null);
  const timeoutRef = useRef(null);
  const navigate = useNavigate();
  const isMobile = window.innerWidth < breakpoints.mobile;
  const recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const [readOnly, setReadOnly] = useState(false);
  const [editButtonDisabled, setEditButtonDisabled] = useState(true);
  const [confirmButtonDisabled, setConfirmButtonDisabled] = useState(false);
  const lottieRef = useRef(null);
  const [isRestart, setIsRestart] = useState(false);
  const setConfirm = useSetAtom(confirmAtom);

  const [nextPageTrigger, setNextPageTrigger] = useState(false);
  
  useEffect(() => {
    setConfirmButtonDisabled(answer[parseInt(step) - 1] ? false : true);
  }, [answer, step]);

  const handleTextChange = (e) => {
    setTranscript(e.target.value);
  };

  useEffect(() => {
    if (!recognition) {
      alert("이 브라우저는 음성 인식을 지원하지 않습니다.");
      return;
    }

    if (answer[parseInt(step) - 1]) {
      setIsRestart(true);
      setConfirmButtonDisabled(false);
    }

    speechRecognizerRef.current = new recognition();
    speechRecognizerRef.current.interimResults = false;
    speechRecognizerRef.current.continuous = true;
    speechRecognizerRef.current.interimResults = true;
    speechRecognizerRef.current.lang = "ko-KR";

    speechRecognizerRef.current.onresult = (event) => {
      const result = Array.from(event.results)
        .map((res) => res[0].transcript)
        .join(" ");

      if (isRestart) {
        setTranscript(result);
      } else {
        setTranscript((prevTranscript) => prevTranscript + " " + result);
      }
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
      setTranscript(answer[parseInt(step) - 1]);
      setConfirmButtonDisabled(true);
      setEditButtonDisabled(true);
      setIsRestart(false);
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
      setEditButtonDisabled(false);
      setConfirmButtonDisabled(false);
      setIsRestart(true);

      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    }
  };

  const clickRestartButtonHandler = () => {
    setConfirm({
      message: "다시 녹음 하기",
      description: "작성한 내용이 지워질 수 있어요",
      isVisible: true,
      onConfirm: () => {
        isListening ? stopListening() : startListening();
      },
      onCancel: () => {},
      acceptButtonName: "확인"
    });
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

  const goToNextPage = (event) => {
    event.preventDefault();
    setNextPageTrigger(true); 
  };
  
  useEffect(() => {
    if (nextPageTrigger) {
      // 새로운 상태 업데이트
      const updatedJobState = {
        ...jobState,
        answer: jobState.answer.map((item, index) =>
          index === parseInt(step) - 1 ? answer[parseInt(step) - 1] : item
        ),
      };
  
      setJobState(updatedJobState);
  
      // 상태가 변경된 후 sessionStorage 업데이트
      sessionStorage.setItem("jobState", JSON.stringify(updatedJobState));
  
      if (Number(step) >= 5) {
        console.log('Loading 페이지로 이동');
        navigate('/Loading');
      } else {
        navigate(`${PATH.JOB_QUESTION}/${parseInt(step) + 1}`);
      }
  
      setNextPageTrigger(false);
    }
  }, [nextPageTrigger]);
  

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
      <Confirm />
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
        <Button width={isMobile ? "156px" : "100%"} height="48px" innerText="수정" disabled={editButtonDisabled} onClick={handleEdit} />
        <Button 
          width={isMobile ? "156px" : "100%"} 
          height="48px" 
          innerText="확인" 
          disabled={confirmButtonDisabled} 
          onClick={(e) => goToNextPage(e)} 
        />
      </ButtonContainer>
      <Spacer height={28} />
      <Footer>
        <BackIcon src={doubleArrowLeft} onClick={handleBack} />
        {isRestart ?
        <RestartIconWrapper>
          <RestartIcon 
            src={restart} 
            onClick={clickRestartButtonHandler} 
          />
        </RestartIconWrapper>
        : 
        <VoiceBox>
          <VoiceProgress active={isListening} onClick={clickButtonHandler} />
        </VoiceBox>
      }
      </Footer>
    </Content>
  );
};

const RestartIconWrapper = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.secondary[90]};
  justify-self: center;
  align-self: center;
`;

const RestartIcon = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

const VoiceBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-self: center;
  align-self: center;
`;

export const QuestionBox = styled.div`
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
  height: 84px;
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