import React from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../components/common/libraries/firebase";

function LoginButtons({ email={email}, password={password} }) {
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

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("로그인 성공:", userCredential.user);
      alert("로그인 성공!");
      navigate("/Main"); 
    } catch (error) {
      console.error("로그인 실패:", error.message);
      alert("로그인 실패: " + error.message);
    }
  };

  return (
    <div style={style.buttonContainer}>
      <button 
        style={style.loginButton} 
        type="button"
        onClick={handleLogin}
      >
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
