import { confirmAtom } from '../../../store/modal';
import styled from '@emotion/styled';
import { useAtom } from 'jotai';
import colors from '../../../constants/colors';

import Modal from './Modal';

export const Confirm = () => {
  const [modal, setModal] = useAtom(confirmAtom);
  const { message, description, isVisible, onConfirm, onCancel } = modal;

  const confirm = () => {
    setModal({
      message: '',
      description: '',
      isVisible: false,
      onConfirm: () => {},
      onCancel: () => {},
    });
    onConfirm();
  };

  const cancel = () => {
    setModal({
      message: '',
      description: '',
      isVisible: false,
      onConfirm: () => {},
      onCancel: () => {},
    });
    onCancel();
  };

  return (
    <Modal open={isVisible} onClose={() => {}} height={122}>
      <ConfirmStyle>
        <MessageStyle>{message}</MessageStyle>
        <DescriptionStyle>{description}</DescriptionStyle>
        <ButtonContainer>
          <CancelButton onClick={cancel}>취소</CancelButton>
          <AcceptButton onClick={confirm}>나가기</AcceptButton>
        </ButtonContainer>
      </ConfirmStyle>
    </Modal>
  );
};

const ConfirmStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${colors.grayScale[100]};
  font-weight: 600;
  font-size: 17px;
`;

const MessageStyle = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin-top: 16px;

`;

const DescriptionStyle = styled.div`
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  margin-top: 6px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  border-top: 1px solid #d9d9d9;
  border-radius: 16px;
  `;
  
  const CancelButton = styled.button`
    width: 134px;
    height: 44px;
    background-color: ${colors.secondary[10]};
    font-size: 16px;
    border: none;
    border-right: 1px solid #d9d9d9;
    border-radius: 0 0 0 16px;
    padding: 0;
  `;
  
  const AcceptButton = styled.button`
  width: 134px;
  background-color: ${colors.secondary[10]};
  height: 44px;
  color: ${colors.primary[100]};
  font-size: 16px;
  border: none;
  border-radius: 0 0 16px 0;
`;

export default Confirm;