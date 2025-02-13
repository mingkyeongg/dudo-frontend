import { useEffect, useState } from "react";
import Header from "./HeaderArchiving";
import Jobs from "./Jobs";
import { auth } from "../../components/common/libraries/firebase";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import back_icon from "../../assets/icon/back.svg";

function JobArchiving() {
  const [jobList, setJobList] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const user = auth.currentUser;
      if (user) {
        const db = getFirestore();
        const jobResultRef = collection(db, user.uid);
        const snapshot = await getDocs(jobResultRef);
        const jobs = snapshot.docs.map(doc => ({ id: doc.id })); // 문서 이름(날짜)만 가져옴
        setJobList(jobs);
      }
    };
    fetchJobs();
  }, []);

  const style = {
    container: {
      padding: "0px 20% 50px 20%",
      position: "relative"
    },
    backIcon: {
      position: "absolute",  // 절대 위치 설정
      top: "0px",
      left: "20%",          // 왼쪽 여백
      zIndex: 10             // 다른 요소 위에 표시
    }
  };

  return (
    <div style={style.container}>
      <a href="/Main" style={style.backIcon}>
        <img src={back_icon}></img>
      </a>
      <Header text1={"두도지가 추천해준"} text2={"일자리들을 모아뒀어요."} />

      {jobList.length === 0 ? (
        <p>저장된 일자리가 없습니다.</p>
      ) : (
        jobList.map((job) => (
          <Jobs 
            key={job.id}
            text={job.id}  // 문서 이름(생성 날짜) 표시
          />
        ))
      )}
    </div>
  );
}

export default JobArchiving;
