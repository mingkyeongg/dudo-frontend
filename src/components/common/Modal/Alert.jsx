import { alertAtom } from "@/store/modal";
import Modal from "./Modal";
import { useAtomValue, useSetAtom } from "jotai";
import styled from "@emotion/styled";
import colors from '../../../constants/colors';


export const Alert = () => {
  const { message, isVisible, onConfirm } = useAtomValue(alertAtom);
  const setModal = useSetAtom(alertAtom);

  const onClick = () => {
    if (onConfirm) onConfirm();
    setModal({ message: "", isVisible: false, onConfirm: () => {} });
  };

  const style = {
    text: {
      margin: "0px 0px 10px 0px",
    },
  }

  return (
    <Modal 
      open={isVisible} 
      onClose={() => {}}
    >
      <AlertContainer>
        <AlertStyle>
          <p style={style.text}>{message}</p>
        </AlertStyle>
        <AlertButton onClick={onClick}>확인</AlertButton>
      </AlertContainer>
    </Modal>
  );
};

const AlertContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  font-size: 18px;
  font-weight: 600;
  padding: 0px 20px;
  color: ${colors.grayScale[100]};
`;

const AlertStyle = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #black;
  margin-top: 30px;
`;

const AlertButton = styled.button`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: ${colors.secondary[10]};
  border-radius: 0px 0px 16px 16px;
  border: none;
  font-size: 16px;
  cursor: pointer;
  border-top: 1px solid #d9d9d9;
`;

export default Alert;
