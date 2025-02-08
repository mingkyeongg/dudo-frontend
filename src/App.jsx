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

  return (
    <>
      <button onClick={goToWhisper}>Whisper</button>
      <button onClick={goToSpeechToText}>SpeechToText</button>
    </>
  );
}

export default App;
