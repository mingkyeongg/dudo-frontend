import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AudioRecorder from "../whisper";
import SpeechToText from "../SpeechToText";
import { PATH } from "./path";
import ProtectedRoute from "./ProtectedRoute";

import Page from "../pages/Login/Page";
import Login from "../pages/Login/Login";
import LoginHandler from "../pages/Login/LoginHandler";
import RecommendJob from "../components/Job/RecommendJob";

import Main from "../pages/Home/Home";
import Explanation from "../pages/Home/Explanation";
import JobArchiving from "../pages/Archiving/JobArchiving";
import JobResult from "../pages/JobResult/JobResult";
import { JobQuestion } from "../components/Job/JobQuestion";
import JobAnswer from "../components/Job/JobAnswer";
import Loading from '../pages/JobResult/Loading';
import SignUp from "../pages/Login/SignUp";
import FirebasePage from "../components/common/libraries/test.jsx";
import MainLoading from "../pages/Home/MainLoading.jsx";
import JobDetail from "../pages/Archiving/JobDetail.jsx";

const router = createBrowserRouter([
  {
    index: true,
    path: "/",
    element: <Page />,
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
    element: <ProtectedRoute element={<Login />} />,
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
    path: PATH.MAIN,
    element: <Main />,
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
    path: `${PATH.JOBARCHIVING}/:id`,
    element: <JobDetail />,
  },
  {
    path: PATH.JOBRESULT,
    element: <JobResult />,
  },
  {
    path: PATH.LOADING,
    element: <Loading />,
  },
  {
    path: PATH.SIGNUP,
    element: <ProtectedRoute element={<SignUp />} />, 
  },
  {
    path: PATH.MAINLOADING,
    element: <MainLoading />,
  },
]);

export default router;
