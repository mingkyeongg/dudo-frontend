function BoxResume({ title, type, placeholder, value, onChange }) {
  const style = {
    container: {
      padding: "0px 150px"
    },
    text: {
      fontSize: "18px",
      margin: "30px 0px 10px 0px",
    },
    input: {
      width: "100%",
      maxWidth: "700px",
      height: "50px",
      border: "none",
      borderRadius: "20px 20px 0px 20px",
      boxShadow: "0px 5px 10px rgb(147, 124, 85, 0.5)",
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
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={style.input}
      />
    </div>
  );
}

export default BoxResume;
