import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AudioRecorder from "../whisper";
import SpeechToText from "../SpeechToText";
import { PATH } from "./path";

import Page from "../Page";
import Login from "../Login";
import LoginHandler from "../LoginHandler";
import RecommendJob from "../components/Job/RecommendJob";

const router = createBrowserRouter([
  {
    index: true,
    path: "/",
    element: <App />,
  },
  {
    path: PATH.WHISPER,
    element: <AudioRecorder />,
  },
  {
    path: PATH.SPEECHTOTEXT,
    element: <SpeechToText />,
  },
  {
    path: PATH.PAGE,
    element: <Page />,
  },
  {
    path: PATH.LOGIN,
    element: <Login />,
  },
  {
    path: PATH.LOGINHANDLER,
    element: <LoginHandler />,
  },
  {
    path: PATH.JOB,
    element: <RecommendJob />,
  },
]);

export default router;
