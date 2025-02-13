import AnswerLayout from "./AnswerLayout";
import { useParams } from "react-router-dom";

export const JobAnswer = () => {
  const { step } = useParams();

  const question = [
    ['이전에 어떤 회사에서', '무슨 일을 하셨나요?'],
    ['새로운 기술이나 자격증을', '취득하고자 하는 이유는', '무엇인가요?'],
    ['새로운 기술을 배우는 데', '선호하는 방법은 무엇인가요?'],
    ['어떤 기술 분야에', '가장 관심이 있으신가요?'],
    ['거주하시는 곳의 시, 군, 구, 동을', '알려주세요.'],
    // ['대중교통이나 자차 기준, ', '통근 시간은 얼마나', '소요되었으면 하시나요?'],
    // ['하루에 몇 시간정도', '일하고 싶으세요?'],
    // ['몇 년차 경력을 가지고 계신가요?'],
    // ['보유하신 자격증이 있다면', '알려주세요.'],
    // ['어떤 일을 할 때 뿌듯함과', '즐거움을 느끼시나요?', '이유도 궁금해요.'],
    // ['다양한 직업 군들 중', '희망 직종을 선택해주세요.'],
  ];

  const answerDefault = [
    "예시1",
    "예시2",
    "예시3",
    "예시4",
    "예시5",
    // "예시6",
    // "예시7",
    // "예시8",
  ];
  return (
    <AnswerLayout question={question[step - 1]} answerDefault={answerDefault[step - 1]} step={step}/>
  );
};

export default JobAnswer;