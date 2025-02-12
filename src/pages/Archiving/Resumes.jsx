import { useNavigate } from "react-router-dom";

function Resumes({title, date, move}) {
  const navigate = useNavigate();

  const style = {
    container: {
      width: "375px",
      height: "60px",
      borderRadius: "16px",
      border: "none",
      backgroundColor: "#956A65",
      color: "#FFFFFC",
      margin: "25px 0px 0px 0px",
      cursor: "pointer",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flexStart",
    },
    title: {
      fontSize: "18px",
      fontWeight: "600",
      padding: "20px",
      marginRight: "auto",
    },
    date: {
      fontSize: "12px",
      fontWeight: "400",
      padding: "20px",
      marginLeft: "auto",
    },
  }
  
  const handleButton = () => {
    navigate(move);
  };

  return (
    <button style={style.container} onClick={handleButton}>
        <p style={style.title}>사회복지사 이력서</p>
        {/* <p style={style.title}>{title}</p> */}
        
        <p style={style.date}>2025-02-10 15:33</p>
        {/* <p style={style.date}>{date}</p> */}
    </button>
  )
}

export default Resumes;