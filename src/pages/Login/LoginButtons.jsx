import React from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../components/common/libraries/firebase";
import { useSetAtom } from "jotai";
import { alertAtom } from "../../store/modal";
import Alert from "../../components/common/Modal/Alert";

function LoginButtons({ email = { email }, password = { password } }) {
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

  const setAlert = useSetAtom(alertAtom);

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setAlert({
        message: "로그인",
        isVisible: true,
        onConfirm: () => navigate("/Main"),
      });
    } catch (error) {
      console.error("로그인 실패:", error.message);
      let errorMessage = "이메일 또는 비밀번호가 올바르지 않습니다.";
      if (error.code === "auth/invalid-email") {
        errorMessage = "유효하지 않은 이메일 형식입니다.";
      }
      setAlert({
        message: errorMessage,
        isVisible: true,
        onConfirm: () =>
          setAlert({ isVisible: false, message: "", onConfirm: () => {} }),
      });
    }
  };

  return (
    <div style={style.buttonContainer}>
      <Alert />
      <button style={style.loginButton} type="button" onClick={handleLogin}>
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
