import { firebaseApp } from "./firebase";
import { collection, doc, setDoc, getFirestore } from "firebase/firestore/lite";
import { v4 as uuidv4 } from "uuid"; // UUID 생성 라이브러리

export const saveCertificationsToFirestore = async (userId, date, certifications) => {
  try {
    console.log("📌 저장할 자격증 데이터:", { userId, date, certifications });

    if (!userId || !date || !certifications) {
      throw new Error("❌ userId, date 또는 certifications가 존재하지 않습니다.");
    }

    const db = getFirestore(firebaseApp);
    const userRef = collection(db, "users", userId, "certifications");

    const docId = uuidv4();
    sessionStorage.setItem("certDocId", docId); // 🔥 자격증 저장용 문서 ID 저장
    const docRef = doc(userRef, docId);

    await setDoc(docRef, {
      certifications,
      date,
    });

    console.log("✅ 자격증 데이터 Firestore에 저장 완료!");
  } catch (error) {
    console.error("❌ Firestore 저장 중 오류 발생:", error);
  }
};

/**
 * 🔥 Firestore에서 특정 `uuid`에 해당하는 자격증 데이터 가져오기
 * @param {Object} param - 객체 형태의 인자
 * @param {string} param.userId - 사용자의 ID
 * @param {string} param.uuid - 가져올 자격증 문서 ID
 * @returns {Object | null} certificationData - 해당하는 자격증 데이터
 */
export const fetchOneCertification = async ({ userId, uuid }) => {
  try {
    const db = getFirestore(firebaseApp);
    const docRef = doc(db, "users", userId, "certifications", uuid);

    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("✅ Firestore에서 가져온 특정 자격증 데이터:", docSnap.data());
      return docSnap.data();
    } else {
      console.error("❌ 해당 자격증 문서가 존재하지 않습니다.");
      return null;
    }
  } catch (error) {
    console.error("❌ Firestore에서 특정 자격증 데이터 가져오기 오류:", error);
    return null;
  }
};
