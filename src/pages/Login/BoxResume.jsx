function BoxResume({ title, type, value, onChange }) {
  const style = {
    container: {
      width: "100%",
    },
    text: {
      fontSize: "18px",
      margin: "20px 0px 10px 0px",
    },
    input: {
      width: "100%",
      maxWidth: "700px",
      height: "50px",
      borderRadius: "20px 20px 0px 20px",
      border: "1px solid #66553B",
      fontSize: "18px",
      padding: "0px 0px 0px 20px",
      boxSizing: "border-box",
      outline: "none",
    },
  };

  return (
    <div style={style.container}>
      <p style={style.text}>{title}</p>
      <input
        type={type}
        value={value}
        onChange={onChange}
        style={style.input}
      />
    </div>
  );
}

export default BoxResume;
