

const CollectButton = ({text}) => {
  const style = {
    button: {
      width: "375px",
      height: "50px",
      backgroundColor: "#FFFFFC",
      borderRadius: "20px",
      borderWidth: "1px",
      borderColor: "#3E2522"
    },
    text: {
      fontSize: "16px",
      color: "#956A65",
    }
  };

  return (
    <div>
      <button style={style.button}>
        <p style={style.text}>{text}</p>
      </button>
    </div>
  )
}

export default CollectButton;