import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AudioRecorder from "../whisper";
import SpeechToText from "../SpeechToText";
import { PATH } from "./path";

import Page from "../pages/Login/Page";
import Login from "../pages/Login/Login";
import LoginHandler from "../pages/Login/LoginHandler";
import RecommendJob from "../components/Job/RecommendJob";

import Home from "../pages/Home/Home";
import Explanation from "../pages/Home/Explanation";
import JobArchiving from "../pages/Archiving/JobArchiving";
import ResumeArchiving from "../pages/Archiving/ResumeArchiving";
import { JobQuestion } from "../components/Job/JobQuestion";
import JobAnswer from "../components/Job/JobAnswer";

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
    children: [
      {
        path: `${PATH.JOB_QUESTION}/:step`,
        element: <JobQuestion />,
      },
      {
        path: `${PATH.JOB_ANSWER}/:step`,
        element: <JobAnswer />,
      },
    ],
  },
  {
    path: PATH.HOME,
    element: <Home />,
  },
  {
    path: PATH.EXPLANATION,
    element: <Explanation />,
  },
  {
    path: PATH.JOBARCHIVING,
    element: <JobArchiving />,
  },
  {
    path: PATH.RESUMEARCHIVING,
    element: <ResumeArchiving />,
  },
]);

export default router;
