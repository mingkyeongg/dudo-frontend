import dudoMascot from "../../assets/dudo_mascot.svg";
import dudoLogo from "../../assets/dudo_logo.svg";
import BoxResume from "./BoxResume.jsx";
import LoginButtons from "./LoginButtons.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../components/common/libraries/firebase.js";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const auth = getAuth();

  const imageStyle = {
    width: "90px",
    height: "auto",
  };

  const style = {
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      gap: "20px",
      padding: "0px 20%",
    },
    title: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "12px",
    },
    titleText: {
      fontSize: "18px",
    },
    titleLogo: {
      fontSize: "31px",
      fontWeight: "900",
      display: "flex",
      gap: "10px",
    },
    logoImageStyle: {
      width: "125px",
      height: "auto",
    },
    mascotContainer: {
      textAlign: "center",
    },
    mascotImageStyle: {
      width: "193px",
      height: "193px",
    },
    mascotText: {
      fontSize: "14px",
      color: "#806B4C",
    },
    button: {
      border: "none",
      backgroundColor: "#FFFFFC",
      cursor: "pointer",
    }
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log("로그인한 사용자 UID:", uid);
    } else {
      console.log("로그인하지 않은 상태입니다.");
    }
  });
  

  return (
    <>
      <style>
        {`
          * {
            margin: 0;
            padding: 0;
          }
        `}
      </style>

      <div style={style.container}>

        <div style={style.title}>
          <p style={style.titleText}>당신의 <strong>두</strong> 번째 <strong>도</strong>전을 위해,</p>
          <div style={style.titleLogo}>
            <p>두도</p>
            <img src={dudoLogo} style={style.logoImageStyle}></img>
          </div>
        </div>

        <div style={style.mascotContainer}>
          <img src={dudoMascot} style={style.mascotImageStyle}></img>
          <p style={style.mascotText}>두도의 마스코트 <strong>'두도지'</strong></p>
        </div>

        <BoxResume 
          title={"이메일"}
          type={"email"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <BoxResume 
          title={"비밀번호"}
          type={"password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <LoginButtons 
          email={email}
          password={password}
        />
      </div>
    </>
  )
}

export default Login;
