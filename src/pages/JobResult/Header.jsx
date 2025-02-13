import help_icon from "../../assets/icon/help.svg";
import dudo_mascot from "../../assets/dudo_mascot.svg";
import { useEffect, useState } from "react";
import { auth, db } from "../../components/common/libraries/firebase";
import { doc, getDoc } from "firebase/firestore";

function Header() {
  const [ name, setName ] = useState("");

  const style = {
    header: {
      position: "relative",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "10px",
      margin: "40px 0px",
    },
    headerTitle: {
      textAlign: "center",
      fontWeight: "600",
      fontSize: "20px",
      flexGrow: 1,
    },
    helpIcon: {
      right: "10px",
      width: "22px",
      height: "22px",
    },
    textContainer: {
      display: "flex",
      gap: "15px",
      alignItems: "flex-end",
      maxWidth: "700px",
      marginBottom: "20px",
    },
    logoImage: {
      width: "90px",
      height: "90px",
    },
    textBox: {
      display: "flex",
      flexDirection: "column",
      marginBottom: "10px",
    },
    text1: {
      fontSize: "20px",
    },
    text2: {
      fontSize: "20px",
    },
    divider: {
      display: "flex",
      alignItems: "center",
      textAlign: "center",
      width: "100%",
      color: "#848484",
      fontSize: "14px",
      marginTop: "20px",
    },
    hr: {
      flex: 1,
      border: "none",
      borderTop: "1px solid #EAEAEA",
    },
    dividerText: {
      padding: "0 20px",
    },
    globalStyles: `
      @media (max-width: 768px) {
        .header {
        gap: 5px;
        }
        .headerTitle {
          font-size: 18px;
        }
        .logoImage {
          width: 60px;
          height: 60px;
        }
      }
    `,
  };

  useEffect(() => {
    const fetchUserName = async () => {
      const user = auth.currentUser;
      if (user) {
        const userRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(userRef);
        if (docSnap.exists()) {
          setName(docSnap.data().name);
        }
      }
    };
    fetchUserName();
  }, []);

  return (
    <header>
      <div style={style.header}>
        <p style={style.headerTitle}>일자리 추천 결과</p>
        <a href="/Explanation">
          <img src={help_icon} style={style.helpIcon} />
        </a>
      </div>

      <div style={style.textContainer}>
        <img src={dudo_mascot} style={style.logoImage} />
        <div style={style.textBox}>
          <p style={style.text1}><strong>{name}</strong>님이 이 일을 하면</p>
          <p style={style.text2}>잘 하실 것 같아요!</p>
        </div>
      </div>

      <div style={style.divider}>
        <hr style={style.hr} />
        <span style={style.dividerText}>추천 자격증</span>
        <hr style={style.hr} />
      </div>
    </header>
  );
}

export default Header;
