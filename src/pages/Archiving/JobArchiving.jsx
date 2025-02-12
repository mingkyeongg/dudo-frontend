import { useEffect } from "react";
import Header from "./HeaderArchiving";
import Jobs from "./Jobs";

function JobArchiving() {
  {/*
  const [jobList, setJobList] = useState([]);

  useEffect(() => {
    fetch("백엔드 주소")
      .then((data) => {
        setJobList(data);
      })
  }, []);

  */}

  const style = {
    container: {
      padding: "0px 200px 50px 200px"
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
        text1={"두도지가 추천해준"}
        text2={"일자리들을 모아뒀어요."}
      />

      {/* {jobList.map((job, index) => (
        <Jobs 
          text={job.name}
          move={`/job/${job.id}`}
        />
      ))} */}

      <Jobs 
        text={""}
        move={""}
      />

    </div>
  )
}

export default JobArchiving;