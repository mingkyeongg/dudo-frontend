import job_icon from "../../assets/icon/job.svg";
import resume_icon from "../../assets/icon/resume.svg";

import Button from "./JobButton";
import Collect from "./CollectButton";

const MainContent = () => {
  const style = {
    container: {
      display: "flex",
      flexDirection: "column",
      gap: "30px"
    },
    btnContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
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
    },
  };

  return (
    <div style={style.container}>
      <div style={style.btnContainer}>
        <Button 
          text1="나에게 맞는" 
          text2="일자리"
          text3="추천받기" 
          image={job_icon}
          color="#806B4C"
        />
        <Button 
          text1="나만의" 
          text2="이력서"
          text3="쓰러가기" 
          image={resume_icon}
          color="#956A65"
        />
      </div>

      <div style={style.divider}>
        <hr style={style.hr} />
        <span style={style.dividerText}>대화내역</span>
        <hr style={style.hr} />
      </div>

      <div style={style.collectContainer}>
        <Collect text="추천받은 일자리 모아보기" />
        <Collect text="저장된 이력서 모아보기" />
      </div>
    </div>
  )
}
export default MainContent;