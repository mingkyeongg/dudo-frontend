import BoxJobResult from "../JobResult/BoxJobResult";
import Bottom from "../JobResult/Bottom";
import React, { useEffect, useState } from "react";
import { db } from "../../components/common/libraries/firebase";
import { collection, getDoc, doc } from "firebase/firestore";
import { useLocation } from "react-router-dom";
import help_icon from "../../assets/Icon/help.svg";
import dudo_mascot from "../../assets/dudo_mascot.svg";

function JobDetail() {
  const [jobs, setJobs] = useState([]); // ✅ jobs 상태 관리
  const location = useLocation();
  const { certifications, date } = location.state || {};

  console.log("📌 JobDetail 컴포넌트에서 받아온 데이터:", certifications);
  console.log("📌 JobDetail 컴포넌트에서 받아온 데이터:", date);


  const style = {
    container: {
      maxWidth: "700px",
      padding: "0px 20%",
      display: "flex",
      flexDirection: "column",
      position: "relative",
      minHeight: "100vh",
    },
    content: {
      flex: "1",
    },
    bottom: {
      position: "fixed",
      bottom: "0",
      width: "100%",
    },
    globalStyles: `
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      @media (max-width: 768px) {
        .container {
          padding: 0px 20px; 
        }

        .box-job {
          font-size: 16px;
          padding: 15px;
        }

        .bottom {
          padding: 15px 0;
        }
      }
    `,
  };

  useEffect(() => {
    const fetchJobs = async () => {
      if (!certifications.length) return;

      try {
        const jobList = [];

        for (const item of certifications  ) {
          console.log("📌 item:", item);
          const docRef = doc(db, "certifications", item.certificationName);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            const data = docSnap.data();
            jobList.push({
              id: item.certificationNumber,
              certification_rank: item.certificationNumber,
              certification_name: data.certification_name || item.certificationName, // 기본값
              job_post_title: data.job_post_title || "해당 없음",
              job_post_url: data.job_post_url || "#",
              youtube_title: data.youtube_title || "해당 없음",
              youtube_link: data.youtube_link || "#",
              blog_title: data.blog_title || "해당 없음",
              blog_link: data.blog_link || "#",
            });
          } else {
            console.warn(`${item.certificationName} 데이터가 없습니다.`);
          }
        }

        setJobs(jobList);
      } catch (error) {
        console.error("Firebase에서 데이터 가져오기 실패:", error);
      }
    };

    fetchJobs();
  }, []); // ✅ certificationData 변경될 때 실행

  return (
    <div style={style.container}>
      <style>
        {style.globalStyles}
      </style>

      <JobDetailHeader date={date} />

      <div style={style.content}>
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <BoxJobResult
              key={job.id}
              rank={job.certification_rank}
              title={job.certification_name}
              jobListings={[
                { title: job.job_post_title, link: job.job_post_url },
                { title: job.youtube_title, link: job.youtube_link },
                { title: job.blog_title, link: job.blog_link },
              ]}
            />
          ))
        ) : (
          <p>데이터를 불러오는 중...</p>
        )}
      </div>

      <Bottom style={style.bottom} />
    </div>
  );
}

function JobDetailHeader({date}) {
  const [ name, setName ] = useState("");

  const style = {
    header: {
      position: "relative",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "10px",
      margin: "40px 0px",
    },
    headerTitle: {
      textAlign: "center",
      fontWeight: "600",
      fontSize: "20px",
      flexGrow: 1,
    },
    helpIcon: {
      right: "10px",
      width: "22px",
      height: "22px",
    },
    textContainer: {
      display: "flex",
      gap: "15px",
      alignItems: "flex-end",
      maxWidth: "700px",
      marginBottom: "20px",
    },
    logoImage: {
      width: "90px",
      height: "90px",
    },
    textBox: {
      display: "flex",
      flexDirection: "column",
      marginBottom: "10px",
    },
    text1: {
      fontSize: "20px",
      fontWeight: "600",
    },
    text2: {
      fontSize: "20px",
      fontWeight: "600",
    },
    divider: {
      display: "flex",
      alignItems: "center",
      textAlign: "center",
      width: "100%",
      color: "#848484",
      fontSize: "14px",
      marginTop: "20px",
    },
    hr: {
      flex: 1,
      border: "none",
      borderTop: "1px solid #EAEAEA",
    },
    dividerText: {
      padding: "0 20px",
    },
    globalStyles: `
      @media (max-width: 768px) {
        .header {
        gap: 5px;
        }
        .headerTitle {
          font-size: 18px;
        }
        .logoImage {
          width: 60px;
          height: 60px;
        }
      }
    `,
  };

  useEffect(() => {
    const fetchUserName = async () => {
      const user = auth.currentUser;
      if (user) {
        const userRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(userRef);
        if (docSnap.exists()) {
          setName(docSnap.data().name);
        }
      }
    };
    fetchUserName();
  }, []);

  return (
    <header>
      <div style={style.header}>
        <p style={style.headerTitle}>일자리 추천 결과</p>
        <a href="/Explanation">
          <img src={help_icon} style={style.helpIcon} />
        </a>
      </div>

      <div style={style.textContainer}>
        <img src={dudo_mascot} style={style.logoImage} />
        <div style={style.textBox}>
          <p style={style.text1}>{date}에 받은</p>
          <p style={style.text2}>추천 결과에요!</p>
        </div>
      </div>

      <div style={style.divider}>
        <hr style={style.hr} />
        <span style={style.dividerText}>추천 자격증</span>
        <hr style={style.hr} />
      </div>
    </header>
  );
}


export default JobDetail;
