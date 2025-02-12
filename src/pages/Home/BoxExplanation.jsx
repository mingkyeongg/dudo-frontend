

const BoxExplanation = ({image, title, text1, text2, color}) => {
  const style = {
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      backgroundColor: color,
      margin: "20px 0px",
      padding: "23px",
      borderRadius: "20px",
      gap: "8px",
      width: "90%",
      height: "94px",
    },
    title: {
      display: "flex",
      fontWeight: "700",
      gap: "8px",
      fontSize: "18px",
      marginBottom: "5px",
    },
    text: {
      fontSize: "18px",
    },
  };

  return (
    <>
      <style>
        {`
          * {
            margin: 0;
            padding: 0;
          }
        `}
      </style>
      
      <div style={style.container}>
        <div style={style.title}>
          <img src={image}></img>
          <p>{title}</p>
        </div>

        <p style={style.text}>{text1}</p>
        <p style={style.text}>{text2}</p>

      </div>
    </>
  )
}

export default BoxExplanation;