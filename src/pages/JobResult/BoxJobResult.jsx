import { useState } from "react";
import down_icon from "../../assets/Icon/down.svg";

function BoxJobResult({rank, title, jobListings}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const style = {
    container: {
      width: "100%",
      maxWidth: "500px",
      margin: "10px 0px",
      backgroundColor: "#FFEED4",
      display: "flex",
      flexDirection: "column",
      padding: "20px",
      fontSize: "20px",
      borderRadius: "10px",
      cursor: 'pointer',
      boxSizing: "border-box"
    },
    header: {
      display: "flex",
      justifyContent: 'space-between',
      alignItems: "center",
    },
    text: {
      display: "flex",
      gap: "20px",
    },
    arrow: {
      width: "20px",
      height: "20px",
      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
      transition: "transform 0.3s ease",
    },
    content: {
      display: isOpen ? "block" : "none",
      marginTop: "20px",
      paddingTop: "20px",
      borderTop: "1px solid #E5C89C",
    },
    textContent: {
      margin: "0px 0px 30px 0px",
    },
    jobItem: {
      
      backgroundColor: "#66553B",
      color: "white",
      padding: "10px",
      borderRadius: "20px",
      margin: "15px 0px",
      fontSize: "16px",
      textAlign: "center",
      textDecoration: "none",
      display: "block",
    }
  };


  return (
    <div style={style.container} onClick={toggleAccordion}>
      <div style={style.header}>
        <div style={style.text}>
          <p>{rank}위 | </p>
          <p>{title}</p>
        </div>
        <img src={down_icon} style={style.arrow}></img>
      </div>

      <div style={style.content}>
        <p style={style.textContent}><strong>채용공고</strong></p>
        {jobListings.map((job, index) => (
          <a 
            key={index} 
            href={job.link}
            target="_blank"
            style={style.jobItem}
          >
            {job.title}
          </a>
        ))}
      </div>

    </div>
  )
};

export default BoxJobResult;