import { firebaseApp } from "./firebase";
import { collection, doc, setDoc, getFirestore } from "firebase/firestore/lite";
import { v4 as uuidv4 } from "uuid"; // UUID 생성 라이브러리

export const saveWorkFieldsToFirestore = async (userId, date, workFields) => {
  try {
    console.log("저장할 데이터:", { userId, date, workFields });

    if (!userId || !date || !workFields) {
      throw new Error("❌ userId, date 또는 workFields가 존재하지 않습니다.");
    }

    const db = getFirestore(firebaseApp);
    const userRef = collection(db, "users", userId, "recommendations");

    const docId = uuidv4();
    sessionStorage.setItem("docId", docId);
    const docRef = doc(userRef, docId);

    await setDoc(docRef, {
      workFields,
      date,
    });

    console.log("✅ 유저 데이터 Firestore에 저장 완료!");
  } catch (error) {
    console.error("❌ Firestore 저장 중 오류 발생:", error);
  }
};
