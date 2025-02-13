import AnswerLayout from "./AnswerLayout";
import { useParams } from "react-router-dom";
import { SelectJob } from "./SelectJob";

export const JobAnswer = () => {
  const { step } = useParams();

  const question = [
    ['이전에 어떤 회사에서', '무슨 일을 하셨나요?'],
    ['새로운 기술이나 자격증을', '취득하고자 하는 이유는', '무엇인가요?'],
    ['새로운 기술을 배우는 데', '선호하는 방법은 무엇인가요?'],
    ['관심 분야를 선택해주세요.'],
    ['거주하시는 곳의 시, 군, 구, 동을', '알려주세요.'],
  ];

  const answerDefault = [
    "예시: ‘멋쟁이사자처럼’의 인사 관리 부서에서 근무했어요. 주로 인재 채용, 교육 프로그램 개발, 직원 복지 관리 등의 업무를 담당했어요.",
    "예시: 퇴직 후 재취업을 위해 전기 관련 자격증을 취득하고 싶습니다.",
    "예시: 실습 위주의 교육과 온라인 강의를 병행하고 싶습니다.",
    "",
    "예시 : 부산광역시 해운대구 우2동에 거주하고 있습니다.",
  ];

  return (
    <>
      {parseInt(step) === 4 ? (
        <SelectJob step={step} />
      ) : (
        <AnswerLayout
          question={question[parseInt(step) - 1]}
          answerDefault={answerDefault[parseInt(step) - 1]}
          step={parseInt(step)}
        />
      )}
    </>
  );
};


export default JobAnswer;