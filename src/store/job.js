import { atom } from "jotai";

const jobStateFromSessionStorage = () => {
  try {
    let savedData = sessionStorage.getItem("jobState"); // 🟢 저장된 데이터 가져오기

    if (!savedData) {
      const defaultState = { answer: ["", "", "", "", "", "", "", ""] };
      sessionStorage.setItem("jobState", JSON.stringify(defaultState));

      return defaultState; // 🔹 기본값 반환
    }

    return JSON.parse(savedData); // 🔹 정상적인 JSON 형식이면 파싱하여 반환
  } catch (error) {
    console.error("❌ sessionStorage 데이터 파싱 오류:", error);
    return { answer: ["", "", "", "", "", "", "", ""] };
  }
};

export const jobAtom = atom(jobStateFromSessionStorage());

export const jobAtomWithPersistence = atom(
  (get) => get(jobAtom),
  (get, set, newValue) => {
    set(jobAtom, newValue);
    sessionStorage.setItem("jobState", JSON.stringify(newValue));
  }
);
