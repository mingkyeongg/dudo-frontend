import help_icon from "../../assets/icon/help.svg";
import dudo_mascot from "../../assets/dudo_mascot.svg";
import { useEffect, useState } from "react";
import { auth, db } from "../../components/common/libraries/firebase";
import { doc, getDoc } from "firebase/firestore";

function Header() {
  const [name, setName] = useState("");

  const style = {
    header: {
      display: "flex",
      flexDirection: "row-reverse",
      margin: "40px 0px",
    },
    logoImage: {
      width: "100px",
      height: "100px",
    },
    textContainer: {
      display: "flex",
      alignItems: "flex-end",
      margin: "30px 0px",
    },
    text1: {
      fontSize: "20px",
      margin: "0px 0px 5px 0px"
    },
    text2: {
      fontSize: "20px",
      margin: "0px 0px 10px 0px"
    }
  };

  useEffect(() => {
    const fetchUserName = async () => {
      if (sessionStorage.getItem("name")) {
        setName(sessionStorage.getItem("name"));
        return;
      }
      const user = auth.currentUser;
      if (user) {
        const userRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(userRef);
        if (docSnap.exists()) {
          setName(docSnap.data().name);
          sessionStorage.setItem("name", docSnap.data().name);
        }
      }
    };
    fetchUserName();
  }, []);


  return (
    <header>
      <div style={style.header}>
        <a href="/Explanation">
          <img src={help_icon}></img>
        </a>
      </div>

      <div style={style.textContainer}>
        <img src={dudo_mascot} style={style.logoImage}></img>
        <div>
          {/* 카카오 별명으로 바꿔야 함  */}
          <p style={style.text1}><strong>{name}</strong>님,</p>
          <p style={style.text2}>무엇을 도와드릴까요?</p>
        </div>
      </div>
    </header>
  )
};

export default Header;