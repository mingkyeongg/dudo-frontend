import styled from '@emotion/styled';
import dudo_mascot from '../../assets/dudo_mascot.svg';
import dudo_logo from '../../assets/dudo_logo.svg';

export const Loading = () => {

  return (
    <LoadingWrapper>
      <img src={dudo_mascot}></img>
      <LogoWrapper>
        <LogoText1>
          당신의 <strong>두</strong> 번째 <strong>도</strong>전을 위해,
        </LogoText1>
        <LogoText2>
          <p>두도</p>
          <img src={dudo_logo}></img>
        </LogoText2>
      </LogoWrapper>
    </LoadingWrapper>
  );
}

const LoadingWrapper = styled.div`
`;

const LogoText1 = styled.p`
  font-size: 20px;
`;

// const HeaderText = styled.h1`
//   font-size: 24px;
//   font-weight: 600;
//   color: ${colors.grayScale[100]};

//   @media(max-width: ${breakpoints.mobile}px) {
//     font-size: 16px;
//   }
// `;

const LogoText2 = styled.div`
  font-size = 30px;
  font-weight = 700;
`;

const LogoWrapper = styled.div`
`;

// const RecommendJobWrapper = styled.div`
//   padding: 30px 20px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   background-color: ${colors.secondary[10]};
//   min-height: 100vh;
//   box-sizing: border-box;
// `;


export default Loading;