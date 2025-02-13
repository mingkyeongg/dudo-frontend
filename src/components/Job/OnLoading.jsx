import styled from "@emotion/styled";
import dudo_mascot from "../../assets/dudo_mascot.svg";
import dudo_logo from "../../assets/dudo_logo.svg";

export const OnLoading = () => {

  return (
    <LoadingWrapper>
      <style>
        {`
          * {
            margin: 0;
            padding: 0;
          }
        `}
      </style>

      <Header>
        <LoadingText>
          <Text>추천 분야를 가져오고 있어요!</Text>
        </LoadingText>

        <Mascot src={dudo_mascot}></Mascot>
      </Header>

      <LogoWrapper>
        <LogoText1>
          당신의 <strong>두</strong> 번째 <strong>도</strong>전을 위해,
        </LogoText1>
        <LogoContent>
          <LogoText2>두도</LogoText2>
          <Logo src={dudo_logo}></Logo>
        </LogoContent>
      </LogoWrapper>
    </LoadingWrapper>
  );
};

const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  padding: 20vh 0 10vh 0;
  box-sizing: border-box;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const LoadingText = styled.div`
  width: 80%;
  background-color: #ffe0b2;
  display: flex;
  justify-content: center;
  padding: 30px;
  border-radius: 20px;
`;

const UserName = styled.p`
  font-weight: 600;
  font-size: 20px;
`;

const Text = styled.p`
  font-weight: 600;
  font-size: 20px;
`;

const Mascot = styled.img`
  width: 170px;
  weight: 170px;
`;

const LogoText1 = styled.p`
  font-size: 20px;
`;

const LogoContent = styled.div`
  display: flex;
  gap: 5px;
`;

const LogoText2 = styled.p`
  font-size: 30px;
  font-weight: 700;
`;

const Logo = styled.img`
  width: 125px;
  height: 35px;
`;

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 10px;
`;

export default OnLoading;
