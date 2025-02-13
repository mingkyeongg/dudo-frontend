import React from "react";
import { useNavigate } from "react-router-dom";

function LoginButtons() {
  const navigate = useNavigate();

  const style = {
    buttonContainer: {
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      width: "100%",
      marginTop: "20px",
    },
    loginButton: {
      backgroundColor: "#7A5C3E",
      color: "#FFFFFF",
      border: "none",
      padding: "15px",
      borderRadius: "10px",
      fontSize: "18px",
      fontWeight: "600",
      cursor: "pointer",
      width: "100%",
    },
    signupButton: {
      backgroundColor: "#FFFFFC",
      color: "#7A5C3E",
      border: "1px solid #7A5C3E",
      padding: "15px",
      borderRadius: "8px",
      fontSize: "18px",
      fontWeight: "600",
      cursor: "pointer",
      width: "100%",
    },
  };

  return (
    <div style={style.buttonContainer}>
      <button style={style.loginButton} type="button">
        로그인
      </button>
      <button 
        style={style.signupButton} 
        type="button"
        onClick={() => navigate("/SignUp")}
      >
        회원가입
      </button>
    </div>
  );
}

export default LoginButtons;
