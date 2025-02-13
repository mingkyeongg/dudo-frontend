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
import { useQuery } from "@tanstack/react-query";
import { fetchOneWorkField } from "../common/libraries/fetchWorkFieldsFromFirestore";

export const SelectJob = ({ step }) => {
  const navigate = useNavigate();
  const isMobile = window.innerWidth < breakpoints.mobile;
  const [confirmButtonDisabled, setConfirmButtonDisabled] = useState(true);
  const [jobState, setJobState] = useAtom(jobAtomWithPersistence);

  const uuid = sessionStorage.getItem("docId");

  console.log(uuid);

  const { data, isLoading } = useQuery({
    queryKey: ["field"],
    queryFn: () => fetchOneWorkField({ userId: "user123", uuid }),
  });

  const [selected, setSelected] = useState([]);
  console.log(data);

  useEffect(() => {

    if (!data) {
      return;
    }

    const savedSelection = jobState.answer[parseInt(step) - 1] || [];
    if (Array.isArray(savedSelection)) {
      const filteredSelection = data.workFields
        .map((field) => field.workFieldName)
        .filter((option) => savedSelection.includes(option));

      setSelected(filteredSelection);
    }
  }, [jobState, step, data]);

  const handleSelect = (title) => {
    setSelected((prev) => {
      if (prev.includes(title)) {
        return prev.filter((item) => item !== title);
      } else if (prev.length < 2) {
        return [...prev, title];
      } else {
        toast.error("2개까지만 선택 가능해요.");
        return prev;
      }
    });
  };

  useEffect(() => {
    setConfirmButtonDisabled(selected.length === 0);
  }, [selected]);

  const goToNextPage = () => {
    const updatedJobState = {
      ...jobState,
      answer: jobState.answer.map((item, index) =>
        index === parseInt(step) - 1 ? selected : item
      ),
    };

    setJobState(updatedJobState);
    sessionStorage.setItem("jobState", JSON.stringify(updatedJobState));
    navigate(`${PATH.JOB_QUESTION}/${parseInt(step) + 1}`);
  };

  return (
    <Content>
      <div>
        <Toaster />
      </div>
      <QuestionBox>희망 직종을 선택해주세요 (최대 2개)</QuestionBox>
      <Spacer height={16} />
      {data && data.workFields.map((field) => (
        <AccordionWrapper key={field.workNumber}>
          <JobAccordion
            title={field.workFieldName}
            isSelected={selected.includes(field.workFieldName)}
            onSelect={() => handleSelect(field.workFieldName)}
          >
            {field.workFieldDescription}
          </JobAccordion>
          <Spacer height={12} />
        </AccordionWrapper>
      ))}
      <Button
        width={isMobile ? "327px" : "100%"}
        height="48px"
        innerText="확인"
        disabled={confirmButtonDisabled}
        onClick={goToNextPage}
      />
    </Content>
  );
};

const AccordionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export default SelectJob;
