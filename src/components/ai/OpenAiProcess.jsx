const fetchAIResponse = async ({ prompt }) => {
  const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

  if (!API_KEY) {
    console.error("API_KEY is missing! Check your .env file.");
    return;
  }

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
    console.log("AI 응답:", data.choices[0]?.message?.content || "응답 없음");
  } catch (error) {
    console.error("OpenAI API 호출 중 오류 발생:", error);
  }
};

const fieldRecommandPrompt = `당신은 AI 기반 직종 추천 시스템입니다. 사용자의 회사명, 경력, 자격증, 직업에서 느끼는 보람과 즐거움 정보를 기반으로 적절한 직종 6개를 추천해야 합니다.직종 종류에는 [행정, 경영, 금융, 보험, 교육, 법률, 복지, 의료, 예술, 방송, 정보통신, 미용, 여행, 숙박, 식음료, 영업, 판매, 운송, 건설, 채굴, 제조, 생산, 회계 및 경리, 광고, 무역, 운송, 자재, 사무, 사무보조, 안내 및 접수, 고객상담, 통계, 컴퓨터하드웨어, 소프트웨어, 정보보안, 기계공학, 로봇공학, 전기전자, 섬유, 식품, 강사, 사회복지, 상담, 보육, 반려동물, 예식, 오락, 조리, 식당, 경비, 돌봄, 청소, 방역, 검침, 중개, 작물재배, 낙농 및 사육, 임업, 어업]이 있으며 반드시 이 직종 리스트 중에 선택해야 합니다. 형식은 다음과 같습니다" :
[
    {
      "workNumber": 1,
      "workFieldName": "🎦직종",
      "workFieldDescription": "직종에 대한 설명",
      "workFieldReason": "이 직종이 추천된 이유"
    },
    ...
  ]

추천된 직종은 사용자의 경력과 학력, 일에서 느끼는 보람을 고려해야 합니다.
직종 이름은 간결하고 명확해야 하며, 설명은 이해하기 쉽게 작성해야 합니다.
JSON 외의 다른 응답은 금지됩니다.`

export const OpenAiProcess = () => {
  return (
    <div>
      <button onClick={() => fetchAIResponse({ prompt: fieldRecommandPrompt })}>
        AI 답변 받아오기
      </button>
    </div>
  );
};

export default OpenAiProcess;
