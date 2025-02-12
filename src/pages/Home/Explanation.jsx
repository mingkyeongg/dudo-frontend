import back_icon from "../../assets/icon/back.svg";
import dudo_logo from "../../assets/dudo_logo.svg";
import search_icon from "../../assets/icon/search.svg";
import pencil_icon from "../../assets/icon/pencil.svg";
import user_icon from "../../assets/icon/user.svg";
import note_icon from "../../assets/icon/note.svg";

import BoxExplanation from "./BoxExplanation";

const Explanation = () => {
  const style = {
    container: {
      maxWidth: '700px',
      padding: "0px 20%",
    },
    header: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      fontWeight: "600",
      fontSize: "16px",
      margin: "40px 0px",
    },
    backIcon: {
      position: "absolute",
      left: "0",
    },
    headerText: {
      textAlign: "center",
      flexGrow: 1,
    },
    logoContainer: {
      display: "flex",
      alignItems: "center",
      gap: "5px", 
      whiteSpace: "nowrap",
    },
    logo: {
      width: "48px",
      heihgt: "14px",
      
    },
    textContainer: {
      margin: "50px 0px 30px 0px",
    },
    text: {
      display: "flex",
      gap: "5px",
      fontSize: "16px",
      margin: "7px 0px",
      flexWrap: "wrap", 
    },
    font: {
      fontSize: "16px",
    },
    globalStyles: `
      @media (max-width: 768px) {
        .container {
          padding: 0px 5%;
        }
        .header {
          font-size: 14px;
        }
        .textContainer {
          margin: 20px 0;
        }
        .logo {
          width: 40px;
          height: 12px;
        }
      }
    `,
  };


  return (
    <div style={style.container}>
      <header style={style.header}>
        <a href="/Home" style={style.backIcon}>
          <img src={back_icon}></img>
        </a>

        <p style={style.headerText}>두도 이용방법</p>
      </header>
      
      <div style={style.textContainer}>
        <p style={style.font}>은퇴 후 새 일자리를 구해보려 하시나요?</p>
        <p 
          style={style.text}>맞춤형 일자리 추천 서비스 
          <span style={style.logoContainer}>
            <strong>두도</strong>
            <img src={dudo_logo} style={style.logo}></img>
          </span>
          는
        </p>
        <p style={style.font}>액티브 시니어 여러분의 <strong>두</strong>번째 <strong>도</strong>전을 응원합니다</p>
      </div>

      <BoxExplanation 
        image={search_icon} 
        title="일자리 추천"
        text1="두도지와 대화해보세요. 흥미와 적성에"
        text2="맞는 일자리를 추천해드립니다."
        color="#FFE0B2"
      />
      <BoxExplanation 
        image={pencil_icon} 
        title="이력서 작성"
        text1="두도지와 대화하며 손쉽게 이력서를"
        text2="완성해보세요."
        color="#FFE5E2"
      />
      <BoxExplanation 
        image={user_icon} 
        title="추천받은 일자리 모아보기"
        text1="여태까지 두도지가 추천해줬던 일자리를"
        text2="확인해보세요."
        color="#FFE0B2"
      />
      <BoxExplanation 
        image={note_icon} 
        title="저장된 이력서 모두보기"
        text1="저장된 이력서를 확인하세요."
        text2=""
        color="#FFE5E2"
      />
    </div>
  )
}

export default Explanation;