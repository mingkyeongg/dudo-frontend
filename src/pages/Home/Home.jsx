import Header from "./Header";
import MainContent from "./MainContent";

function Home() {
  const style = {
    container: {
      padding: "0px 150px",
    }
  }

  return (
    <div style={style.container}>
      <style>
        {`
          * {
            margin: 0;
            padding: 0;
          }
        `}
      </style>

      <Header />
      <MainContent />
    </div>
  )
}

export default Home;