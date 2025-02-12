import Header from "./HeaderArchiving";
import Resumes from "./Resumes";
import { useEffect } from "react";

function ResumeArchiving() {
  {/* 
  const [resumeList, setResumeList] = useState([]);

  useEffect(() => {
    fetch("백엔드 주소")
      .then((data) => {
        setResumeList(data);
      })
  }, []);
  */}

  const style = {
    container: {
      padding: "0px 0px 50px 0px"
    }
  }
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

      <Header
        text1={"두도지와와 대화하며"}
        text2={"만든 이력서예요."}
      />

      {/* {resumeList.map((resume, index) => (
        <Jobs 
          title={resume.name}
          move={`/job/${job.id}`}
        />
      ))} */}

      <Resumes
        title={""}
        date={""}
        move=""
      />
    </div>
  )
}

export default ResumeArchiving;