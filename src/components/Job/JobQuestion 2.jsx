import QuestionLayout from "./QuestionLayout";
import step1 from "../../assets/progressBar/step1.svg";
import step2 from "../../assets/progressBar/step2.svg";
import step3 from "../../assets/progressBar/step3.svg";
import step4 from "../../assets/progressBar/step4.svg";
import step5 from "../../assets/progressBar/step5.svg";
import step6 from "../../assets/progressBar/step6.svg";
import step7 from "../../assets/progressBar/step7.svg";
import step8 from "../../assets/progressBar/step8.svg";
import { useParams } from "react-router-dom";

export const JobQuestion = () => {
  const { step } = useParams();
  const progressBar = [
    step1,
    step2,
    step3,
    step4,
    step5,
    step6,
    step7,
    step8,
  ];
  const question = [
    ['이전에 어떤 회사에서', '무슨 일을 하셨나요?'],
    ['몇 년차 경력을 가지고 계신가요?'],
    ['보유하신 자격증이 있다면', '알려주세요.'],
    ['어떤 일을 할 때 뿌듯함과', '즐거움을 느끼시나요?', '이유도 궁금해요.'],
    ['다양한 직업 군들 중', '희망 직종을 선택해주세요.'],
    ['거주하시는 곳의 시, 군, 구, 동을', '알려주세요.'],
    ['대중교통이나 자차 기준, ', '통근 시간은 얼마나', '소요되었으면 하시나요?'],
    ['하루에 몇 시간정도', '일하고 싶으세요?'],
  ];
  return (
      <QuestionLayout progressbarSrc={progressBar[step - 1]} question={question[step - 1]} step={step}/>
  );
}

export default JobQuestion;