import { useNavigate } from "react-router-dom";
import { PATH } from "./routes/path";
import styled from "@emotion/styled";
import Confirm from "./components/common/Modal/Confirm.jsx";
import OpenAiProcess from "./components/ai/OpenAiProcess.jsx";

function App() {
  const navigate = useNavigate();

  const goToWhisper = () => {
    navigate(PATH.WHISPER);
  };

  const goToSpeechToText = () => {
    navigate(PATH.SPEECHTOTEXT);
  };

  const goToPage = () => {
    navigate(PATH.PAGE);
  };

  const goToJob = () => {
    navigate(PATH.JOB);
  }

  const goToMain = () => {
    navigate(PATH.MAIN);
  }

  const goToResumeWrite = () => {
    navigate(PATH.RESUMEWRITE);
  }
  const goToResumeWrite2 = () => {
    navigate(PATH.RESUMEWRITE2);
  }
  const goToJobResult = () => {
    navigate(PATH.JOBRESULT);
  }
  const goToLoading = () => {
    navigate(PATH.LOADING);
  }

  const goToFirebase = () => {
    navigate(PATH.FIREBASE);
  }


  return (
    <AppContainer>
      <Confirm />
      <button onClick={goToWhisper}>Whisper</button>
      <button onClick={goToSpeechToText}>SpeechToText</button>
      <button onClick={goToPage}>Page</button>
      <button onClick={goToJob}>Job</button>
      <button onClick={goToMain}>Main</button>
      <button onClick={goToResumeWrite}>Resume</button>
      <button onClick={goToResumeWrite2}>Resume2</button>
      <button onClick={goToJobResult}>JobResult</button>
      <button onClick={goToLoading}>Loading</button>
      <button onClick={goToFirebase}>Firebase</button>
      <OpenAiProcess />

      배포 테스트 중 테스트
    </AppContainer>
  );
}

const AppContainer = styled.div`
`;

export default App;
