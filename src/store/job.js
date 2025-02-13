import { atom } from "jotai";

const jobStateFromSessionStorage = () => {
  try {
    let savedData = sessionStorage.getItem("jobState");

    if (!savedData) {
      const defaultState = { answer: ["", "", "", "", ""] };
      sessionStorage.setItem("jobState", JSON.stringify(defaultState));

      return defaultState;
    }

    return JSON.parse(savedData);
  } catch (error) {
    console.error("❌ sessionStorage 데이터 파싱 오류:", error);
    return { answer: ["", "", "", "", ""] };
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
