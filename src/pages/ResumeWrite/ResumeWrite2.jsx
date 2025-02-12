import { useState } from "react";
import Header from "./Header";

function ResumeWrite2({ isEnabled }) {
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [phoneError, setPhoneError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const validatePhone = (value) => {
    const isValid = /^[0-9]{10,11}$/.test(value);
    setPhone(value);
    setPhoneError(!isValid);
  };

  const validateEmail = (value) => {
    const isValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
    setEmail(value);
    setEmailError(!isValid);
  };

  const style = {
    container: {
      width: "100%",
      maxWidth: "700px",
      margin: "0 auto",
    },
    inputGroup: {
      position: "relative",
      marginBottom: "20px",
      display: "flex",
      flexDirection: "column",
    },
    label: {
      fontSize: "18px",
      marginBottom: "8px",
      margin: "20px 0px 10px 0px"
    },
    input: {
      width: "100%",
      maxWidth: "700px",
      height: "50px",
      border: "none",
      borderRadius: "20px 20px 0px 20px",
      boxShadow: "0px 5px 10px rgb(147, 124, 85, 0.5)",
      fontSize: "18px",
      padding: "0px 20px",
      boxSizing: "border-box",
      outline: "none",
      transition: "border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
    },
    errorInput: {
      border: "2px solid red",
      boxShadow: "0px 4px 10px rgba(255, 0, 0, 0.3)",
    },
    errorMessage: {
      color: "red",
      fontSize: "14px",
      marginTop: "5px",
      paddingLeft: "5px",
    },
  };

  return (
    <div style={style.container}>
      <Header />
      
      <div style={style.inputGroup}>
        <label style={style.label}>연락처</label>
        <input
          type="text"
          placeholder="예시 : 01000000000"
          value={phone}
          onChange={(e) => validatePhone(e.target.value)}
          style={phoneError ? { ...style.input, ...style.errorInput } : style.input}
        />
        {phoneError && <p style={style.errorMessage}>올바른 형식인지 확인해주세요</p>}
      </div>

      <div style={style.inputGroup}>
        <label style={style.label}>이메일</label>
        <input
          type="text"
          placeholder="예시 : example@exam.com"
          value={email}
          onChange={(e) => validateEmail(e.target.value)}
          style={emailError ? { ...style.input, ...style.errorInput } : style.input}
        />
        {emailError && <p style={style.errorMessage}>올바른 형식인지 확인해주세요</p>}
      </div>
      
    </div>
  );
}

export default ResumeWrite2;
