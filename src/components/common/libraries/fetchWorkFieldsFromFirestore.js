import { firebaseApp } from "./firebase";
import { collection, getDocs, getFirestore, getDoc, doc } from "firebase/firestore/lite";

export const fetchWorkFieldsFromFirestore = async (userId) => {
  try {
    const db = getFirestore(firebaseApp);
    const userRef = collection(db, "users", userId, "recommendations");

    const snapshot = await getDocs(userRef);
    let workFieldsData = [];

    snapshot.forEach((doc) => {
      workFieldsData.push({
        id: doc.id, 
        ...doc.data(),
      });
    });

    console.log("✅ Firestore에서 가져온 데이터:", workFieldsData);
    return workFieldsData;
  } catch (error) {
    console.error("❌ Firestore에서 데이터 가져오기 오류:", error);
  }
};

export const fetchOneWorkField = async ({ userId, uuid }) => {
  try {
    const db = getFirestore(firebaseApp);
    const docRef = doc(db, "users", userId, "recommendations", uuid);

    const docSnap = await getDoc(docRef); 

    if (docSnap.exists()) {
      console.log("✅ Firestore에서 가져온 데이터:", docSnap.data());
      return docSnap.data();
    } else {
      console.error("❌ 해당 문서가 존재하지 않습니다.");
      return null;
    }
  } catch (error) {
    console.error("❌ Firestore에서 데이터 가져오기 오류:", error);
    return null;
  }
};

