import { useEffect } from "react";

export const fetchAIResponse = async ({ prompt }) => {
  const API_KEY = "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";

  if (!API_KEY) {
    console.error("API_KEY is missing! Check your .env file.");
    return;
  }

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

    aiResponse = aiResponse.replace(/```json/g, "").replace(/```/g, "").trim();
    console.log("AI 응답:", aiResponse);
    let certification;
    try {
      certification = JSON.parse(aiResponse);
    } catch (error) {
      console.error("❌ OpenAI 응답이 JSON 형식이 아닙니다:", error);
      return;
    }
    return certification;
  } catch (error) {
    console.error("OpenAI API 호출 중 오류 발생:", error);
  }
};

const getCertRecommandPrompt = (answer1, answer2, answer3, answer4, answer5) => `
당신은 5060 액티브 시니어의 재취업을 위한 AI 직업 추천 시스템입니다.  
사용자는 은퇴 후 자신의 경력과 흥미를 바탕으로 가장 쉽게 시작할 수 있는 직종을 찾고 싶어 합니다.

사용자가 제공하는 정보
사용자는 다음과 같은 데이터를 입력합니다:  
1. 이전 경력 (이전 회사와 담당 업무)  : ${answer1}  
2. 새로운 기술이나 자격증을 취득하고자 하는 이유 : ${answer2}  
3. 새로운 기술을 배우는 선호 방법 : ${answer3}
4. 사용자의 관심 분야 : ${answer4}
5. 사용자가 거주하는 지역 : ${answer5}

추천해야 할 자격증 리스트
추천할 자격증은 아래의 20개 직군 중에서 가장 적합한 3개를 선택해야 합니다.

1. 지게차운전기능사
2. 한식조리기능사
3. 전기기사
4. 건축기사
5. 전기산업기사
6. 전기기능사
7. 토목기사
8. 직업상담사2급
9. 컴퓨터활용능력2급
10. 자동차정비기능사
11. 정보처리기사
12. 산업안전기사
13. 공조냉동기계기능사
14. 건설안전기사
15. 건축산업기사
16. 전자캐드기능사
17. 대기환경기사
18. 에너지관리기능사
19. 워드프로세서
20. 가스기능사

추천 기준  
- 자격증은 반드시 위 20개의 자격증 중 하나여야 합니다.
- 사용자가 선택한 관심 분야를 고려하여 추천해야 합니다. 
- 관심 분야가 음식서비스인 경우 한식조리기능사를 추천해야 하며, 관심 분야가 환경, 에너지인 경우 대기환경기사 또는 에너지관리기능사를 추천해야 합니다.
- 관심 분야가 정보 통신인 경우 정보처리기사를 추천해야 합니다.
- 자격증 3개의 순서는 추천 순위입니다. 1순위 자격증이 가장 적합한 자격증이며, 3순위 자격증이 비교적 덜 적합한 자격증입니다.

응답 형식 (JSON)  
반드시 아래 형식으로만 응답해야 합니다. JSON 외의 다른 응답은 금지됩니다.  

[
  {
    certificationNumber: 1,
    certificationName: "자격증 이름",

  },
  {
    certificationNumber: 2,
    certificationName: "자격증 이름",

  },
  {
    certificationNumber: 3,
    certificationName: "자격증 이름",

  },
]
`;

export function GetCertificaionList({ answer1, answer2, answer3, answer4, answer5 }) {
  const prompt = getCertRecommandPrompt(answer1, answer2, answer3, answer4, answer5);
  const certification = fetchAIResponse({ prompt });

  return certification;
};

export default GetCertificaionList;