import { useNavigate } from "react-router-dom";
import { PATH } from "./routes/path";
import styled from "@emotion/styled";
import colors from "./constants/colors";

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

  const goToHome = () => {
    navigate(PATH.HOME);
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

  return (
    <AppContainer>
      <button onClick={goToWhisper}>Whisper</button>
      <button onClick={goToSpeechToText}>SpeechToText</button>
      <button onClick={goToPage}>Page</button>
      <button onClick={goToJob}>Job</button>
      <button onClick={goToHome}>Home</button>
      <button onClick={goToResumeWrite}>Resume</button>
      <button onClick={goToResumeWrite2}>Resume2</button>
      <button onClick={goToJobResult}>JobResult</button>

      배포 테스트 중 테스트
    </AppContainer>
  );
}

const AppContainer = styled.div`
`;

export default App;
