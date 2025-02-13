import styled from '@emotion/styled';
import dudo_mascot from '../../assets/dudo_mascot.svg';
import dudo_logo from '../../assets/dudo_logo.svg';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../../components/common/libraries/firebase';
import { doc, getDoc } from "firebase/firestore";

export const Loading = () => {
  const navigate = useNavigate();
  const [ name, setName ] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/Jobwrite');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

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
          <UserName>{ name }</UserName>
          <Text>님의 적성을 분석하고 있어요!</Text>
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
  background-color: #FFE0B2;
  display: flex;
  justify-content: center;
  padding: 30px 0px;
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

export default Loading;