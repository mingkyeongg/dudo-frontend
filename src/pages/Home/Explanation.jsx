import back_icon from "../../assets/icon/back.svg";
import dudo_logo from "../../assets/dudo_logo.svg";
import search_icon from "../../assets/icon/search.svg";
import pencil_icon from "../../assets/icon/pencil.svg";
import user_icon from "../../assets/icon/user.svg";
import note_icon from "../../assets/icon/note.svg";

import BoxExplanation from "./BoxExplanation";

const Explanation = () => {
  return (
    <>
      <header>
        <a>
          <img src={back_icon}></img>
        </a>

        <p>두도 이용방법</p>
      </header>
      
      <p>은퇴 후 새 일자리를 구해보려 하시나요?</p>
      <p>맞춤형 일자리 추천 서비스 <span>두도 <img src={dudo_logo}></img></span>는</p>
      <p>액티브 시니어 여러분의 <span>두</span> 번째 <span>도</span>전을 응원합니다</p>

      <BoxExplanation 
        image={search_icon} 
        title="일자리 추천"
        text1="두도지와 대화해보세요. 흥미와 적성에"
        text2="맞는 일자리를 추천해드립니다."
      />
      <BoxExplanation 
        image={pencil_icon} 
        title="이력서 작성"
        text1="두도지와 대화하며 손쉽게 이력서를"
        text2="완성해보세요."
      />
      <BoxExplanation 
        image={user_icon} 
        title="추천받은 일자리 모아보기"
        text1="여태까지 두도지가 추천해줬던 일자리를"
        text2="확인해보세요."
      />
      <BoxExplanation 
        image={pencil_icon} 
        title="저장된 이력서 모두보기"
        text1="저장된 이력서를 확인하세요."
        text2=""
      />
    </>
  )
}

export default Explanation;