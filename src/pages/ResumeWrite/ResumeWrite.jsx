import BoxResume from "./BoxResume";
import CheckBox from "../Login/CheckBox";
import { useState } from "react";

function ResumeWrite() {
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [address, setAddress] = useState("");

  const isFormComplete = name && year && month && day && address;

  const style = {
    container: {
      padding: "0px 150px",
    },
    text: {
      fontSize: "18px",
      margin: "30px 0px 10px 0px",
    },
    input: {
      width: "100%",
      maxWidth: "500px",
      height: "50px",
      border: "none",
      borderRadius: "20px 20px 0px 20px",
      boxShadow: "0px 5px 10px rgb(147, 124, 85, 0.5)",
      fontSize: "18px",
      padding: "0px 40px 0px 20px",
      boxSizing: "border-box",
      appearance: "none",
      backgroundPosition: "calc(100% - 20px) center",
      backgroundRepeat: "no-repeat",
      outline: "none",
      color: year && month && day ? "black" : "gray",
    },
    option: {
      color: "gray"
    },
  };

  return (
    <div>
      <style>
        {`
          * {
            margin: 0;
            padding: 0;
          }
        `}
      </style>

      <BoxResume 
        title={"이름"}
        type={"text"}
        placeholder={"예시 : 허지연"}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <div style={style.container}>
        <p style={style.text}>생년월일</p>
        <div style={{ display: "flex", gap: "10px" }}>
          <select style={style.input} value={year} onChange={(e) => setYear(e.target.value)}>
            <option value="" disabled>년</option>
            {Array.from({ length: 71 }, (_, i) => 1955 + i).map((year) => (
              <option key={year} value={year}>{year}년</option>
            ))}
          </select>
          <select style={style.input} value={month} onChange={(e) => setMonth(e.target.value)}>
            <option value="" disabled>월</option>
            {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
              <option key={month} value={month}>{month}월</option>
            ))}
          </select>
          <select style={style.input} value={day} onChange={(e) => setDay(e.target.value)}>
            <option value="" disabled>일</option>
            {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
              <option key={day} value={day}>{day}일</option>
            ))}
          </select>
        </div>
      </div>

      <BoxResume 
        title={"주소"}
        type={"text"}
        placeholder={"예시 : 대구광역시 수성구 사월동"}
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />

      <CheckBox isEnabled={isFormComplete} />

    </div>
  )
}

export default ResumeWrite;