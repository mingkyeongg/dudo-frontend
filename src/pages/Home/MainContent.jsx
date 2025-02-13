import job_icon from "../../assets/icon/job.svg";
import resume_icon from "../../assets/icon/resume.svg";

import Button from "./JobButton";
import Collect from "./CollectButton";

const MainContent = () => {
  const style = {
    container: {
      display: "flex",
      flexDirection: "column",
      gap: "30px",
      alignItems: "center",
    },
    btnContainer: {
      width: "100%",
      maxWidth: "700px",
    },
    divider: {
      display: "flex",
      alignItems: "center",
      textAlign: "center",
      width: "100%",
      color: "#848484",
      fontSize: "14px",
    },
    hr: {
      flex: 1,
      border: "none",
      borderTop: "1px solid #EAEAEA",
    },
    dividerText: {
      padding: "0 20px",
    },
    collectContainer: {
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      width: "100%",
    },
  };

  return (
    <div style={style.container}>
      <div style={style.btnContainer}>
        <Button 
          text1="나에게 맞는" 
          text2="일자리 추천받기"
          image={job_icon}
          color="#B29872"
          move={"/Job/Question/1"}
        />
      </div>

      <div style={style.divider}>
        <hr style={style.hr} />
        <span style={style.dividerText}>대화내역</span>
        <hr style={style.hr} />
      </div>

      <div style={style.collectContainer}>
        <Collect 
          text="추천받은 일자리 모아보기" 
          move="/JobArchiving"
        />
      </div>
    </div>
  )
}
export default MainContent;