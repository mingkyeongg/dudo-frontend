import help_icon from "../../assets/icon/help.svg";
import dudo_mascot from "../../assets/dudo_mascot.svg";

function Home() {
  return (
    <header>
      <a href="/Explanation">
        <img src={help_icon}></img>
      </a>

      <img src={dudo_mascot}></img>
      <div>
        <p>지연님,</p>
        <p>무엇을 도와드릴까요?</p>
      </div>
    </header>
  )
}

export default Home;