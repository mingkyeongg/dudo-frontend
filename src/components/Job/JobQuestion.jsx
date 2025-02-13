import QuestionLayout from "./QuestionLayout";
import step1 from "../../assets/progressBar/step1.svg";
import step2 from "../../assets/progressBar/step2.svg";
import step3 from "../../assets/progressBar/step3.svg";
import step4 from "../../assets/progressBar/step4.svg";
import step5 from "../../assets/progressBar/step5.svg";
import { useParams } from "react-router-dom";
import { useSetAtom } from "jotai";
import { jobAtomWithPersistence } from "../../store/job";
import OpenAiProcess from "../ai/OpenAiProcess";

export const JobQuestion = () => {
  const { step } = useParams();
  const jobState = JSON.parse(sessionStorage.getItem("jobState"));
  const setJobState = useSetAtom(jobAtomWithPersistence);

  console.log(jobState.answer);

  const progressBar = [
    step1,
    step2,
    step3,
    step4,
    step5,
  ];
  const question = [
    ['이전에 어떤 회사에서', '무슨 일을 하셨나요?'],
    ['새로운 기술이나 자격증을', '취득하고자 하는 이유는', '무엇인가요?'],
    ['새로운 기술을 배우는 데', '선호하는 방법은 무엇인가요?'],
    ['어떤 기술 분야에', '가장 관심이 있으신가요?'],
    ['거주하시는 곳의 시, 군, 구, 동을', '알려주세요.'],
  ];

  const makeAIDatas = () => {
      const answer1 = jobState.answer[0];
      const answer2 = jobState.answer[1];
      const answer3 = jobState.answer[2];
      return (
        <OpenAiProcess question1={answer1} question2={answer2} question3={answer3} />
      );
  };

  if (step === "1") {
    sessionStorage.setItem("jobState", JSON.stringify({ answer: ["", "", "", "", ""] }));
    setJobState({ answer: ["", "", "", "", ""] });
  }
  

  return (
    <>
      {step === "4" && makeAIDatas()}  
      <QuestionLayout progressbarSrc={progressBar[step - 1]} question={question[step - 1]} step={step}/>
    </>
  );
  
}

export default JobQuestion;