import Header from "./Header";
import MainContent from "./MainContent";

function Home() {
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

      <Header />
      <MainContent />
    </>
  )
}

export default Home;