import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom"; // ✅ 네비게이션 추가
import styled from "@emotion/styled";
import Header from "./HeaderArchiving";
import Jobs from "./Jobs";
import backIcon from "../../assets/icon/back.svg";
import { fetchCertificationsFromFirestore } from "../../components/common/libraries/fetchCertificationsFromFirestore";
import { PATH } from "../../routes/path";

function JobArchiving() {
  const navigate = useNavigate();
  const userId = sessionStorage.getItem("userId");

  const { data = [] } = useQuery({
    queryKey: ["field", userId], 
    queryFn: () => fetchCertificationsFromFirestore(userId),
  });

  console.log("🔥 가져온 데이터:", data);

  

  return (
    <Container>
      <BackButton onClick={() => navigate("/Main")}>
        <img src={backIcon} alt="뒤로가기" />
      </BackButton>

      <Header text1={"두도지가 추천해준"} text2={"일자리들을 모아뒀어요."} />

      {data.length === 0 ? (
        <p>저장된 일자리가 없습니다.</p>
      ) : (
        data.map((cert) => (
          <Jobs 
            key={cert.id}
            text={cert.date}
            onClick={() => {
              console.log("클릭됨! 이동할 ID:", cert.id);
              console.log("전달할 state:", cert.certifications);
            
              navigate(`/Jobarchiving/${cert.id}`, { state: { certifications: cert.certifications, date: cert.date } });
            }}
          />
        ))
      )}
    </Container>
  );
}

export default JobArchiving;

const Container = styled.div`
  padding: 0px 20% 50px 20%;
  position: relative;
`;

const BackButton = styled.button`
  position: absolute;
  top: 0px;
  left: 20%;
  z-index: 10;
  background: none;
  border: none;
  cursor: pointer;
`;
