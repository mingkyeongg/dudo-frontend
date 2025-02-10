import { useNavigate } from "react-router-dom";
import { PATH } from "./routes/path";

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

  return (
    <>
      <button onClick={goToWhisper}>Whisper</button>
      <button onClick={goToSpeechToText}>SpeechToText</button>

      <button onClick={goToPage}>Page</button>
      <button onClick={goToJob}>Job</button>
    </>
  );
}

export default App;
