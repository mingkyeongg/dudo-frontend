import help_icon from "../../assets/icon/help.svg";
import dudo_mascot from "../../assets/dudo_mascot.svg";

function Header() {
  const style = {
    header: {
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "40px 0px",
    },
    headerTitle: {
      textAlign: "center",
      fontWeight: "600",
      width: "100%",
    },
    logoImage: {
      width: "94px",
      height: "94px",
    },
    textContainer: {
      display: "flex",
      alignItems: "flex-end",
      margin: "30px 0px",
    },
    text1: {
      fontSize: "18px",
      margin: "0px 0px 5px 0px"
    },
    text2: {
      fontSize: "18px",
      margin: "0px 0px 10px 0px"
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
  };

  return (
    <header>
      <div style={style.header}>
        <p style={style.headerTitle}>일자리 추천 결과</p>
        <a href="/Explanation">
          <img src={help_icon}></img>
        </a>
      </div>

      <div style={style.textContainer}>
        <img src={dudo_mascot} style={style.logoImage}></img>
        <div>
          {/* 카카오 별명으로 바꿔야 함  */}
          <p style={style.text1}><strong>지연</strong>님이 이 일을 하면</p>
          <p style={style.text2}>잘 하실 것 같아요!</p>
        </div>
      </div>

      <div style={style.divider}>
        <hr style={style.hr} />
        <span style={style.dividerText}>추천 직업</span>
        <hr style={style.hr} />
      </div>

    </header>
  )
};

export default Header;