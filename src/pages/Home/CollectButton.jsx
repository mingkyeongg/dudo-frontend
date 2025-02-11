import { useNavigate } from "react-router-dom";

const CollectButton = ({text, move}) => {
  const navigate = useNavigate();

  const style = {
    button: {
      width: "375px",
      height: "50px",
      backgroundColor: "#FFFFFC",
      borderRadius: "20px",
      borderWidth: "1px",
      borderColor: "#3E2522",
      cursor: "pointer"
    },
    text: {
      fontSize: "16px",
      color: "#956A65",
    }
  };
  
  const handleButton = () => {
    navigate(move);
  };

  return (
    <div>
      <button style={style.button} onClick={handleButton}>
        <p style={style.text}>{text}</p>
      </button>
    </div>
  )
}

export default CollectButton;