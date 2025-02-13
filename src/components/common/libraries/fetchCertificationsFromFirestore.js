import { firebaseApp } from "./firebase";
import { collection, getDocs, getFirestore, getDoc, doc } from "firebase/firestore/lite";

/**
 * 🔥 Firestore에서 사용자의 모든 추천 자격증 데이터를 가져오는 함수
 * @param {string} userId - 사용자의 ID
 * @returns {Array} certificationsData - 사용자의 전체 추천 자격증 목록
 */
export const fetchCertificationsFromFirestore = async (userId) => {
  try {
    const db = getFirestore(firebaseApp);
    const userRef = collection(db, "users", userId, "certifications");

    const snapshot = await getDocs(userRef);
    let certificationsData = [];

    snapshot.forEach((doc) => {
      certificationsData.push({
        id: doc.id, 
        ...doc.data(),
      });
    });

    console.log("✅ Firestore에서 가져온 자격증 데이터:", certificationsData);
    return certificationsData;
  } catch (error) {
    console.error("❌ Firestore에서 자격증 데이터 가져오기 오류:", error);
    return [];
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
