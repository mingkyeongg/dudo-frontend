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

  const goToResumeResult = () => {
    navigate(PATH.RESUMERESULT);
  }

  return (
    <AppContainer>
      <button onClick={goToWhisper}>Whisper</button>
      <button onClick={goToSpeechToText}>SpeechToText</button>
      <button onClick={goToPage}>Page</button>
      <button onClick={goToJob}>Job</button>
      <button onClick={goToHome}>Home</button>
      배포 테스트 중
    </AppContainer>
  );
}

const AppContainer = styled.div`
`;

export default App;
