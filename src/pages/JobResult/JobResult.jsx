import Header from "./Header";
import BoxJobResult from "./BoxJobResult";
import Bottom from "./Bottom";

function JobResult() {
  const style = {
    container: {
      maxWidth: "700px",
      padding: "0px 20%",
      display: "flex",
      flexDirection: "column",
      position: "relative",
      minHeight: "100vh",
    },
    content: {
      flex: "1",
    },
    bottom: {
      position: "fixed",
      bottom: "0",
      width: "100%",
    },
    globalStyles: `
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      @media (max-width: 768px) {
        .container {
          padding: 0px 20px; 
        }

        .box-job {
          font-size: 16px;
          padding: 15px;
        }

        .bottom {
          padding: 15px 0;
        }
      }
    `,
  };

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

      <div style={style.content}>
        <BoxJobResult
          rank={1}
          title="사회복지사"
          jobListings={[
            {
              title: "#1 채용공고제목 00000",
              link: "https://www.example.com/job1",
            },
            {
              title: "#2 채용공고제목 00000",
              link: "https://www.example.com/job2",
            },
            {
              title: "#3 채용공고제목 00000",
              link: "https://www.example.com/job3",
            },
          ]}
        />
        <BoxJobResult
          rank={2}
          title="사회복지사"
          jobListings={[
            {
              title: "#1 채용공고제목 00000",
              link: "https://www.example.com/job1",
            },
            {
              title: "#2 채용공고제목 00000",
              link: "https://www.example.com/job2",
            },
            {
              title: "#3 채용공고제목 00000",
              link: "https://www.example.com/job3",
            },
          ]}
        />
        <BoxJobResult
          rank={3}
          title="사회복지사"
          jobListings={[
            {
              title: "#1 채용공고제목 00000",
              link: "https://www.example.com/job1",
            },
            {
              title: "#2 채용공고제목 00000",
              link: "https://www.example.com/job2",
            },
            {
              title: "#3 채용공고제목 00000",
              link: "https://www.example.com/job3",
            },
          ]}
        />
      </div>

      <Bottom style={style.bottom} />
    </div>
  );
}

export default JobResult;
