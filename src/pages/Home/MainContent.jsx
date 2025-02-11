import job_icon from "../../assets/icon/job.svg";
import resume_icon from "../../assets/icon/resume.svg";

import Button from "./JobButton";
import Collect from "./CollectButton";

const MainContent = () => {
  return (
    <div>
      <Button text1="나에게 맞는" text2="일자리 추천받기" image={job_icon}/>
      <Button text1="나만의" text2="이력서 쓰러가기" image={resume_icon}/>
      
      <div>
        <Collect text="추천받은 일자리 모아보기"/>
        <Collect text="저장된 이력서 모아보기"/>
      </div>
    </div>
  )
}
export default MainContent;