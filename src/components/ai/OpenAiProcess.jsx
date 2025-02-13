import { useEffect } from "react";
import { saveWorkFieldsToFirestore } from "../common/libraries/saveWorkFields.js";

export const fetchAIResponse = async ({ prompt }) => {
  const API_KEY = "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";

  if (!API_KEY) {
    console.error("API_KEY is missing! Check your .env file.");
    return;
  }

  const userId = sessionStorage.getItem("userId");

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`, // 🔥 백틱 사용
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: prompt }],
      }),
    });

    const data = await response.json();
    let aiResponse = data.choices[0]?.message?.content || "{}";

    aiResponse = aiResponse
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();
    console.log("AI 응답:", aiResponse);

    const today = new Date().toISOString().split("T")[0];
    let workFields;
    try {
      workFields = JSON.parse(aiResponse);
    } catch (error) {
      console.error("❌ OpenAI 응답이 JSON 형식이 아닙니다:", error);
      return;
    }

    saveWorkFieldsToFirestore(userId, today, workFields);
  } catch (error) {
    console.error("OpenAI API 호출 중 오류 발생:", error);
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

export const OpenAiProcess = ({ answer1, answer2, answer3 }) => {
  useEffect(() => {
    const prompt = getFieldRecommandPrompt(answer1, answer2, answer3);
    fetchAIResponse({ prompt });
  }, [answer1, answer2, answer3]);

  return <></>;
};

export default OpenAiProcess;
