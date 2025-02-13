import BoxResume from "./BoxResume";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import quit_icon from "../../assets/Icon/quit.svg";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../components/common/libraries/firebase";
import { db } from "../../components/common/libraries/firebase";
import { doc, setDoc } from 'firebase/firestore';

function SignUp() {
  const [email, setEmail] = useState("");
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

  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      await setDoc(doc(db, "users", user.uid), {
        name: name,
        email: email,
      });

      console.log("회원가입 성공:", userCredential.user);
      alert("회원가입 성공!");
      navigate("/login");
    } catch (error) {
      console.error("회원가입 실패:", error.message);
      alert("회원가입 실패: " + error.message);
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
      <button 
        style={style.signupButton} 
        type="button"
        onClick={handleSignUp}
      >
        회원가입
      </button>
    </div>
  );
}

export default SignUp;
