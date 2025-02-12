import dudoLogo from "../../assets/dudo_logo.svg";
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

function Page() {
  const [ currentView, setCurrentView ] = useState("preview");
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentView("login");
      navigate("/Login");
    }, 1000); 

    return () => {
      clearTimeout(timer);
    };
  }, [navigate]);

  const style = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "80vh",
    },
    imageStyle: {
      width: "140px",
      height: "auto",
    },
  };

  return (
    <div style={style.container}>
      <img src={dudoLogo} style={style.imageStyle}></img>
    </div>
  );
}

export default Page;
