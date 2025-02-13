import { useNavigate } from "react-router-dom";

function Jobs({text, move, onClick}) {
  const navigate = useNavigate();

  const style = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
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
    // navigate("/Result", { state: {id: text}});
  };

  return (
    <button style={style.container} onClick={onClick}>
      <p style={style.text}>{text}</p>
    </button>
  )
}

export default Jobs;