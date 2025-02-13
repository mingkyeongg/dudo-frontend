import styled from '@emotion/styled';
import colors from '../../constants/colors';
import { Outlet } from 'react-router-dom';
import breakpoints from '../../constants/breakpoints';
import quitIcon from '../../assets/Icon/home.svg';
import { useSetAtom } from 'jotai';
import { confirmAtom } from '../../store/modal';
import { Confirm } from '../common/Modal/Confirm';
import { alertAtom } from '../../store/modal';
import Alert from '../common/Modal/Alert';

export const RecommendJob = () => {
  const setConfirm = useSetAtom(confirmAtom);
  const setAlert = useSetAtom(alertAtom);

  const onClick = () => {
    setConfirm({
      message: '홈으로 나가시겠어요?',
      description: '현재 페이지가 저장되지 않아요',
      isVisible: true,
      onConfirm: () => {
        window.location.href = '/Main';
        sessionStorage.removeItem('jobState');
      },
      onCancel: () => {},
    });
    // setAlert({
    //   message: '홈으로 나가시겠어요?',
    //   isVisible: true,
    //   onConfirm: () => {
    //     window.location.href = '/Main';
    //     sessionStorage.removeItem('jobState');
    //   },
    // });
  }

  return (
    <RecommendJobWrapper>
      <Header>
        <Confirm />
        <Alert />
        <HeaderText>
          일자리 추천받기
        </HeaderText>
        <QuitIcon 
          src={quitIcon} 
          alt="quit" 
          onClick={onClick}
        />
      </Header>
      <Outlet />
    </RecommendJobWrapper>
  );
}

const RecommendJobWrapper = styled.div`
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.secondary[10]};
  min-height: 100vh;
  box-sizing: border-box;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
`;

const HeaderText = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: ${colors.grayScale[100]};

  @media(max-width: ${breakpoints.mobile}px) {
    font-size: 16px;
  }
`;

const QuitIcon = styled.img`
  position: absolute;
  right: 28px;
  width: 20px;
  height: 20px;
  cursor: pointer;

  @media(max-width: ${breakpoints.mobile}px) {
    position: absolute;
    width: 15px;
    height: 15px;
    right: 28px;
  }
`;

export default RecommendJob;