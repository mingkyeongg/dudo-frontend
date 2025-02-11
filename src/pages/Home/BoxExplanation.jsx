

const BoxExplanation = ({image, title, text1, text2}) => {
  const style = {
    container: {
      display: "flex",
      flexDirection: "column",
      // justifyContent: "flex-end",
      alignItems: "center",
    }
  };

  return (
    <div style={style.container}>
      <div>
        <img src={image}></img>
        <p>{title}</p>
      </div>

      <p>{text1}</p>
      <p>{text2}</p>

    </div>
  )
}

export default BoxExplanation;