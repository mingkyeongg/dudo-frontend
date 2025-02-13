import BoxResume from "./BoxResume";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import quit_icon from "../../assets/icon/quit.svg";

function SignUp() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName ] = useState('');
  const navigate = useNavigate();

  const style = {
    container: {
      padding: "20px 20%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      height: "100vh",
      //justifyContent: "center",
      boxSizing: "border-box",
      gap: "20px"
    },
    icon: {
      cursor: "pointer",
      position: "absolute",
      right: "20px",
      top: "20px",
    },
    header: {
      position: "relative",
      width: "100%",
      textAlign: "center",
      fontSize: "20px",
      fontWeight: "600",
      marginBottom: "30px",
    },
    signupButton: {
      marginTop: "30px",
      backgroundColor: "#7A5C3E",
      color: "#FFFFFF",
      border: "none",
      padding: "15px",
      borderRadius: "10px",
      fontSize: "18px",
      fontWeight: "600",
      cursor: "pointer",
      width: "100%",
    }
  };

  return (
    <div style={style.container}>
      <div style={style.header}>
        <p>회원가입</p>
        <img 
          src={quit_icon} 
          style={style.icon}
          onClick={() => navigate("/Login")}
        ></img>
      </div>

      <BoxResume 
        title={"이름"}
        type={"text"}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <BoxResume 
        title={"아이디"}
        type={"text"}
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <BoxResume 
        title={"비밀번호"}
        type={"password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button style={style.signupButton} type="button">
        회원가입
      </button>
    </div>
  );
}

export default SignUp;
