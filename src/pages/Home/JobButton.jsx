
const JobButton = ({text1, text2, text3, image, color, move}) => {
  const style = {
    container: {
    },
    button: {
      width: "100%",
      height: "260px",
      borderRadius: "24px",
      border: "none",
      backgroundColor: color,
      color: "#FFFFFC",
      padding: "30px",
      cursor: "pointer",
    },
    text1: {
      fontSize: "16px",
      margin: "0px 0px 5px 0px"
    },
    text2: {
      fontSize: "18px",
      fontWeight: "600",
      margin: "0px 0px 5px 0px"
    },
    image: {
      width: "100px",
      height: "100px",
      margin: "7px 0px 0px 0px"
    }
  };

  return (
    <div style={style.container}>
      <button 
        style={style.button}
        type="button"
        onClick={() => window.location.href = move}
      >
        <p style={style.text1}>{text1}</p>
        <p style={style.text2}>{text2}</p>
        <p style={style.text2}>{text3}</p>
        <img src={image} style={style.image}></img>
      </button>
    </div>
  )
}

export default JobButton;