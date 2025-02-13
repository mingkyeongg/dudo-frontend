import home_icon from "../../assets/Icon/bottom.svg";

function Bottom() {
  const style = {
    container: {
      display: "flex",
      justifyContent: "center",
      marginBottom: "70px",
      padding: "10px",
      width: "100%",
    }
  };

  return (
    <div style={style.container}>
      <a href="/Home">
        <img src={home_icon}></img>
      </a>
    </div>
  )
};

export default Bottom;