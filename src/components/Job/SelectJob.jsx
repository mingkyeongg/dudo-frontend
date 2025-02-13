import { useEffect, useState } from "react";
import { QuestionBox } from "./AnswerLayout";
import Content from "./Content";
import JobAccordion from "./JobAccordion";
import { Toaster, toast } from "react-hot-toast";
import { Spacer } from "../common/Spacer";
import Button from "../common/Button";
import styled from "@emotion/styled";
import breakpoints from "../../constants/breakpoints";
import { useNavigate } from "react-router-dom";
import { jobAtomWithPersistence } from "../../store/job";
import { useAtom } from "jotai";
import { PATH } from "../../routes/path";

export const SelectJob = ({ step }) => {
  const isMobile = window.innerWidth < breakpoints.mobile;
  const navigate = useNavigate();
  const [confirmButtonDisabled, setConfirmButtonDisabled] = useState(true);
  const [jobState, setJobState] = useAtom(jobAtomWithPersistence);

  const jobOptions = ["📚 교육", "💻 IT", "🔧 기술", "🛒 서비스", "📊 금융", "🎨 디자인"];
  const [selected, setSelected] = useState([]);

  /** ✅ 페이지가 처음 로드될 때, 기존 선택값을 반영 */
  useEffect(() => {
    const savedSelection = jobState.answer[parseInt(step) - 1] || [];
    const filteredSelection = jobOptions.filter((option) => savedSelection.includes(option));
    setSelected(filteredSelection);
  }, [jobState, step]);

  /** ✅ 사용자가 선택하면 상태 업데이트 */
  const handleSelect = (title) => {
    setSelected((prev) => {
      if (prev.includes(title)) {
        return prev.filter((item) => item !== title); // 선택 해제
      } else if (prev.length < 2) {
        return [...prev, title]; // 최대 2개까지 선택
      } else {
        toast.error("2개까지만 선택 가능해요.");
        return prev;
      }
    });
  };

  /** ✅ 선택 상태가 변경될 때 버튼 활성화/비활성화 업데이트 */
  useEffect(() => {
    setConfirmButtonDisabled(selected.length === 0);
  }, [selected]);

  /** ✅ 다음 페이지 이동 및 `sessionStorage`에 저장 */
  const goToNextPage = () => {
    const updatedJobState = {
      ...jobState,
      answer: jobState.answer.map((item, index) =>
        index === parseInt(step) - 1 ? selected : item
      ),
    };

    setJobState(updatedJobState);
    sessionStorage.setItem("jobState", JSON.stringify(updatedJobState)); // 최신 값 저장
    navigate(`${PATH.JOB_QUESTION}/${parseInt(step) + 1}`);
  };

  return (
    <Content>
      <div><Toaster /></div>
      <QuestionBox>희망 직종을 선택해주세요 (최대 2개)</QuestionBox>
      <Spacer height={16} />
      {jobOptions.map((title) => (
        <ArrcodionWrapper key={title}>
          <JobAccordion
            title={title}
            isSelected={selected.includes(title)}
            onSelect={() => handleSelect(title)}
          >
            {`${title}에 대한 설명`}
          </JobAccordion>
          <Spacer height={12} />
        </ArrcodionWrapper>
      ))}
      <Button
        width={isMobile ? "156px" : "100%"}
        height="48px"
        innerText="확인"
        disabled={confirmButtonDisabled}
        onClick={goToNextPage}
      />
    </Content>
  );
};

const ArrcodionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export default SelectJob;
