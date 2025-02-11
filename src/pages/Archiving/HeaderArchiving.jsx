import help_icon from "../../assets/icon/help.svg";
import dudo_mascot from "../../assets/dudo_mascot.svg";

function HeaderArchiving({text1, text2}) {
  const style = {
    header: {
      display: "flex",
      flexDirection: "row-reverse",
      margin: "40px 0px",
    },
    logoImage: {
      width: "94px",
      height: "94px",
    },
    textContainer: {
      display: "flex",
      alignItems: "flex-end",
      margin: "30px 0px 20px 0px",
    },
    text: {
      fontSize: "18px",
      fontWeight: "700",
      margin: "0px 0px 5px 0px"
    },
    hr: {
      flex: 1,
      border: "none",
      borderTop: "1px solid #EAEAEA",
    }
  };

  return (
    <header>
      <div style={style.header}>
        <a href="/Explanation">
          <img src={help_icon}></img>
        </a>
      </div>

      <div style={style.textContainer}>
        <img src={dudo_mascot} style={style.logoImage}></img>
        <div>
          <p style={style.text}>{text1}</p>
          <p style={style.text}>{text2}</p>
        </div>
      </div>

      <hr style={style.hr}/>
    </header>
  )
};

export default HeaderArchiving;