import { useNavigate } from "react-router-dom";
import { PATH } from "./routes/path";
import styled from "@emotion/styled";
import Confirm from "./components/common/Modal/Confirm.jsx";
import OpenAiProcess from "./components/ai/OpenAiProcess.jsx";

function App() {
  const navigate = useNavigate();

  const goToPage = () => {
    navigate(PATH.PAGE);
  };

  const goToFirebase = () => {
    navigate(PATH.FIREBASE);
  }


  return (
    <AppContainer>
      <Confirm />
      <button onClick={goToPage}>Page</button>
      <OpenAiProcess />

    </AppContainer>
  );
}

const AppContainer = styled.div`
`;

export default App;
