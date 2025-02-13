import { useEffect, useState } from "react";
import Header from "./HeaderArchiving";
import Jobs from "./Jobs";
import { auth } from "../../components/common/libraries/firebase";
import { getFirestore, collection, getDocs } from "firebase/firestore";

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
      padding: "0px 20% 50px 20%"
    }
  };

  return (
    <div style={style.container}>
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
