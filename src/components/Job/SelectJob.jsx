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
import pinIcon from "../../assets/Icon/pin.svg";
import goodIcon from "../../assets/Icon/good.svg";
import OnLoading from "./OnLoading";

export const SelectJob = ({ step }) => {
  const navigate = useNavigate();
  const isMobile = window.innerWidth < breakpoints.mobile;
  const [confirmButtonDisabled, setConfirmButtonDisabled] = useState(true);
  const [jobState, setJobState] = useAtom(jobAtomWithPersistence);
  const [arrayLength, setArrayLength] = useState(0);
  const stepIndex = parseInt(step, 10);

  const [uuid, setUuid] = useState(sessionStorage.getItem("docId"));
const [userId, setUserId] = useState(sessionStorage.getItem("userId"));

useEffect(() => {
  const storedUuid = sessionStorage.getItem("docId");
  const storedUserId = sessionStorage.getItem("userId");
  
  if (storedUuid) setUuid(storedUuid);
  if (storedUserId) setUserId(storedUserId);
}, []);

  const { data, isLoading } = useQuery({
    queryKey: ["field", uuid],
    queryFn: () => (uuid ? fetchOneWorkField({ userId , uuid }) : null),
    enabled: !!uuid,
  });

  const [selected, setSelected] = useState([]);
  console.log(data);

  useEffect(() => {
    if (!data || !data.workFields) return;

    const savedSelection = jobState.answer[stepIndex - 1] || [];
    if (Array.isArray(savedSelection)) {
      const validSelections = data.workFields
        .map((field) => field.workFieldName)
        .filter((option) => savedSelection.includes(option));

      setSelected(validSelections);
    }
  }, [jobState, stepIndex, data]);

  const handleSelect = (title) => {
    setSelected((prevSelected) => {
      if (prevSelected.includes(title)) {
        return prevSelected.filter((item) => item !== title);
      } else if (prevSelected.length < 2) {
        return [...prevSelected, title];
      } else {
        toast.error("2개까지만 선택 가능해요.");
        return prevSelected;
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
        index === stepIndex - 1 ? selected : item
      ),
    };

    setJobState(updatedJobState);
    sessionStorage.setItem("jobState", JSON.stringify(updatedJobState));
    navigate(`${PATH.JOB_QUESTION}/${stepIndex + 1}`);
  };

  useEffect(() => {
    if (data?.workFields && data.workFields.length > 0) {
      console.log("🔄 데이터 업데이트됨:", data.workFields.length);
      setArrayLength((prev) => (prev !== data.workFields.length ? data.workFields.length : prev));
    }
  }, [data?.workFields?.length]);  // ✅ 배열 길이를 직접 감지
  
  useEffect(() => {
    console.log("📌 arrayLength 상태 변경:", arrayLength);
  }, [arrayLength]);
  
  if (!data || data?.workFields.length !== 6) {
    return <OnLoading />;
  }
  


  return (
    <>
        <Content>
          <Toaster />
          <QuestionBox>희망 직종을 선택해주세요 (최대 2개)</QuestionBox>
          <Spacer height={16} />
          {data?.workFields?.map((field) => (
            <AccordionWrapper key={field.workNumber}>
              <JobAccordion
                title={field.workFieldName}
                isSelected={selected.includes(field.workFieldName)}
                onSelect={() => handleSelect(field.workFieldName)}
              >
                <TitleWrapper>
                  <PinIcon src={pinIcon} alt="pin" />
                  <Title>이 분야는</Title>
                  </TitleWrapper>
                {field.workFieldDescription}
                <Spacer height={16} />
                <TitleWrapper>
                  <GoodIcon src={goodIcon} alt="pin" />
                  <Title>추천 이유</Title>
                  </TitleWrapper>
                  {field.workFieldReason}
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
    </>
  );
};

const TitleWrapper = styled.div`
  display: flex;
  gap: 5px;
  margin-bottom: 10px;
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: 500;
`;

const PinIcon = styled.img`
  width: 16px;
  height: 16px;
`;

const GoodIcon = styled.img`
  width: 16px;
  height: 16px;
`;

const AccordionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export default SelectJob;
