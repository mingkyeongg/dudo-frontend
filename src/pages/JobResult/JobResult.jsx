import Header from "./Header";
import BoxJobResult from "./BoxJobResult";
import Bottom from "./Bottom";
import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { db } from "../../components/common/libraries/firebase";
import { collection, getDoc, doc } from "firebase/firestore";

function JobResult() {
  const certificationData = [
    { certificationNumber: 1, certificationName: "한식조리기능사" },
    { certificationNumber: 2, certificationName: "정보처리기사" },
    { certificationNumber: 3, certificationName: "컴퓨터활용능력 2급" },
  ];
  //const location = useLocation();
  //const { certificationData } = location.state || {};
  const [jobs, setJobs] = useState([]);

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

  // useEffect(() => {
  //   const fetchJobs = async () => {
  //     try {
  //       if (certificationData) {
  //         const jobList = [];
  //         for (const item of certificationData) {
  //           const docRef = doc(db, "certifications", item.certificationName);
  //           const docSnap = await getDoc(docRef);
  //           if (docSnap.exists()) {
  //             jobList.push({ id: item.certificationNumber, ...docSnap.data() });
  //           }
  //         }
  //         setJobs(jobList);
  //       }
  //     } catch (error) {
  //       console.error("Firebase에서 데이터 가져오기 실패:", error);
  //     }
  //   };

  //   fetchJobs();
  // }, [certificationData]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const jobList = [];
        for (const item of certificationData) {
          const docRef = doc(db, "certifications", item.certificationName);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const data = docSnap.data();
            jobList.push({
              id: item.certificationNumber,
              certification_rank: item.certificationNumber,
              certification_name: data.certification_name,
              job_post_title: data.job_post_title,
              job_post_url: data.job_post_url,
              youtube_title: data.youtube_title,
              youtube_link: data.youtube_link,
              blog_title: data.blog_title,
              blog_link: data.blog_link,
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
  }, []);

  return (
    <div style={style.container}>
      <style>
        {`
          * {
            margin: 0;
            padding: 0;
          }
        `}
      </style>

      <Header />

      <div style={style.content}>
        {jobs.map((job) => (
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
        ))}
        {/* <BoxJobResult
          rank={1}
          title="사회복지사"
          jobListings={[
            {
              title: "#1 채용공고제목 00000",
              link: "https://www.example.com/job1",
            },
            {
              title: "#2 채용공고제목 00000",
              link: "https://www.example.com/job2",
            },
            {
              title: "#3 채용공고제목 00000",
              link: "https://www.example.com/job3",
            },
          ]}
        />
        <BoxJobResult
          rank={2}
          title="사회복지사"
          jobListings={[
            {
              title: "#1 채용공고제목 00000",
              link: "https://www.example.com/job1",
            },
            {
              title: "#2 채용공고제목 00000",
              link: "https://www.example.com/job2",
            },
            {
              title: "#3 채용공고제목 00000",
              link: "https://www.example.com/job3",
            },
          ]}
        />
        <BoxJobResult
          rank={3}
          title="사회복지사"
          jobListings={[
            {
              title: "#1 채용공고제목 00000",
              link: "https://www.example.com/job1",
            },
            {
              title: "#2 채용공고제목 00000",
              link: "https://www.example.com/job2",
            },
            {
              title: "#3 채용공고제목 00000",
              link: "https://www.example.com/job3",
            },
          ]}
        /> */}
      </div>

      <Bottom style={style.bottom} />
    </div>
  );
}

export default JobResult;
