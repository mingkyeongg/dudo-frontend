import { useEffect } from "react";
import { saveWorkFieldsToFirestore } from "../common/libraries/saveWorkFields.js";

export const fetchAIResponse = async ({ prompt }) => {
  const API_KEY = "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";
  if (!API_KEY) {
    console.error("API_KEY is missing! Check your .env file.");
    return;
  }

  const userId = sessionStorage.getItem("userId");
  const today = new Date().toISOString().split("T")[0];

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: prompt }],
      }),
    });

    const data = await response.json();

    let aiResponse = data.choices[0]?.message?.content || null;

    if (!aiResponse) {
      throw new Error("OpenAI 응답이 없음");
    }

    // ✅ JSON 파싱 시도
    try {
      aiResponse = aiResponse.replace(/```json/g, "").replace(/```/g, "").trim();
      const workFields = JSON.parse(aiResponse);
      console.log("✅ AI 응답:", workFields);

      // 🔥 정상 응답이면 Firestore에 저장
      saveWorkFieldsToFirestore(userId, today, workFields);
    } catch (error) {
      console.error("❌ JSON 파싱 오류 발생:", error);
      console.warn("🔥 목데이터(`mockData`)를 저장합니다.");
      
      // 🔥 JSON 파싱 실패 시 목데이터 저장
      saveWorkFieldsToFirestore(userId, today, mockData[0].workFields);
    }
  } catch (error) {
    console.error("❌ OpenAI API 호출 중 오류 발생:", error);
    console.warn("🔥 목데이터(`mockData`)를 저장합니다.");
    
    // 🔥 API 호출 실패 시 목데이터 저장
    saveWorkFieldsToFirestore(userId, today, mockData[0].workFields);
  }
};

const getFieldRecommandPrompt = (answer1, answer2, answer3) => `
당신은 5060 액티브 시니어의 재취업을 위한 AI 직업 추천 시스템입니다.  
사용자는 은퇴 후 자신의 경력과 흥미를 바탕으로 가장 쉽게 시작할 수 있는 직종을 찾고 싶어 합니다.

사용자가 제공하는 정보
사용자는 다음과 같은 데이터를 입력합니다:  
1. 이전 경력 (이전 회사와 담당 업무)  : ${answer1}  
2. 새로운 기술이나 자격증을 취득하고자 하는 이유 : ${answer2}  
3. 새로운 기술을 배우는 선호 방법 : ${answer3}  

추천해야 할 직종 리스트
추천할 직종은 아래의 15개 직군 중에서 가장 적합한 6개를 선택해야 합니다.

1. 건설  
2. 전기/전자
3. 음식서비스
4. 기계
5. 안전관리
6. 경영, 회계, 사무
7. 환경, 에너지
8. 정보 통신
11. 식품, 가공  
14. 재료  
15. 운전, 운송  

추천 기준  
- 직종은 반드시 위 직군 중 하나여야 합니다.
- 새로운 기술 취득 의향 및 학습 선호 방법을 적극 고려하여 추천해야 합니다.  
- 추천 직종은 사용자가 쉽게 적응할 수 있는 직업이어야 합니다.  
- 직종 이름은 간결하고 명확해야 하며, 설명은 이해하기 쉬운 표현으로 작성해야 합니다.  
- 추천된 이유는 사용자의 경험과 성향에 기반하여 납득가능한 설명을 제공해야 합니다.  

응답 형식 (JSON)  
반드시 아래 형식으로만 응답해야 합니다. JSON 외의 다른 응답은 금지됩니다.  

[
  {
    "workNumber": 1,
    "workFieldName": "직종 이름",
    "workFieldDescription": "직종에 대한 설명",
    "workFieldReason": "이 직종이 추천된 이유"
  },
  {
    "workNumber": 2,
    "workFieldName": "직종 이름",
    "workFieldDescription": "직종에 대한 설명",
    "workFieldReason": "이 직종이 추천된 이유"
  }
]
`;

const mockData = [
  {
    "date": "2025-02-13",
    "workFields": [
      {
        "workFieldDescription": "전기 및 전자 장비의 설치와 수리, 유지보수를 담당하는 직군입니다.",
        "workFieldName": "전기/전자",
        "workFieldReason": "전기/전자 분야는 다양한 자격증을 통해 기술을 배우고 쉽게 접근할 수 있으며, 경력에 따라 많은 경험을 활용할 수 있습니다.",
        "workNumber": 1
      },
      {
        "workFieldDescription": "건축물 및 토목 구조물의 건설과 관련된 업무를 수행하는 분야입니다.",
        "workFieldName": "건설",
        "workFieldReason": "건설 분야는 체계적인 교육과 자격증 취득을 통해 진입할 수 있으며, 다양한 경험을 활용하여 프로젝트에 참여할 수 있습니다.",
        "workNumber": 2
      },
      {
        "workFieldDescription": "산업 현장에서의 안전 기준을 마련하고 이를 지키기 위한 관리 업무를 수행하는 직군입니다.",
        "workFieldName": "안전관리",
        "workFieldReason": "안전관리는 다양한 산업에서 필요로 하며, 직업교육 과정을 통해 쉽게 배울 수 있는 매력적인 분야입니다.",
        "workNumber": 3
      },
      {
        "workFieldDescription": "기업의 회계, 경영 관리를 지원하는 사무 관련 업무를 포함하는 분야입니다.",
        "workFieldName": "경영, 회계, 사무",
        "workFieldReason": "이 분야는 경영 경험이 많은 사용자에게 적합하며, 사무 환경에서 빠르게 적응할 수 있습니다.",
        "workNumber": 4
      },
      {
        "workFieldDescription": "정보통신 네트워크의 설계, 구축 및 운영에 관련된 직군입니다.",
        "workFieldName": "정보 통신",
        "workFieldReason": "정보 통신 분야는 최신 기술을 배우기 좋고, 다양한 온라인 교육이 제공되어 새로운 기술 습득이 용이합니다.",
        "workNumber": 5
      },
      {
        "workFieldDescription": "화물이나 사람을 안전하고 효율적으로 운송하는 업무를 포함합니다.",
        "workFieldName": "운전, 운송",
        "workFieldReason": "운전 및 운송 분야는 비교적 쉽게 접근할 수 있으며, 운전 경험을 바탕으로 추가 교육을 통해 직업으로 연결할 수 있습니다.",
        "workNumber": 6
      }
    ]
  }
];  

export const OpenAiProcess = ({ answer1, answer2, answer3 }) => {
  useEffect(() => {
    const prompt = getFieldRecommandPrompt(answer1, answer2, answer3);
    fetchAIResponse({ prompt });
  }, [answer1, answer2, answer3]);

  return <></>;
};

export default OpenAiProcess;
