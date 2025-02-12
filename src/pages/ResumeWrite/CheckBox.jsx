function CheckBox({ isEnabled }) {
  const style = {
    container: {
      padding: "0px 150px",
      maxWidth: "500px",
      // display: "flex",
      // justifyContent: "center",
    },
    button: {
      width: "100%",
      padding: "10px 0", 
      fontSize: "16px", 
      border: "none",
      borderRadius: "10px",
      backgroundColor: isEnabled ? "#78514C" : "#f0f0f0", 
      color: isEnabled ? "white" : "black", 
      cursor: isEnabled ? "pointer" : "default",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
    }
  };

  return (
    <div style={style.container}>
      <button style={style.button} disabled={!isEnabled}>
        확인
      </button>
    </div>
  );
}

export default CheckBox;
