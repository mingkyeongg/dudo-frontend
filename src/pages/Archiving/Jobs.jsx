import { useNavigate } from "react-router-dom";

function Jobs({text, move}) {
  const navigate = useNavigate();

  const style = {
    container: {
      width: "100%",
      height: "60px",
      borderRadius: "16px",
      backgroundColor: "#806B4C",
      color: "#FFFFFC",
      margin: "25px 0px 0px 0px",
      border: "none",
      display: "flex",
      cursor: "pointer",
    },
    text: {
      fontSize: "18px",
      fontWeight: "600",
      padding: "20px",
    },
  }
  const handleButton = () => {
    navigate(move);
  };

  return (
    <button style={style.container} onClick={handleButton}>
      <p style={style.text}>2025 - 02 - 03</p>
      {/* <p style={style.text}>{text}</p> */}
    </button>
  )
}

export default Jobs;