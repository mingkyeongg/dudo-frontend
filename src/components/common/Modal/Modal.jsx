import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { breakpoints } from '../../../constants/breakpoints';
import styled from '@emotion/styled';
import colors from '../../../constants/colors';

const Modal = ({ onClose, children, open = false, height = 144, overlayBackground }) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';

      window.history.pushState(null, '', window.location.href);
      const handlePopState = () => {
        window.history.pushState(null, '', window.location.href);
        onClose();
      };

      window.addEventListener('popstate', handlePopState);

      return () => {
        window.removeEventListener('popstate', handlePopState);
        document.body.style.overflow = 'auto';
      };
    }
  }, [open, onClose]);

  if (!open) return null;

  const handleOverlayClick = () => {
    onClose();
  };

  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  const modalRoot = document.getElementById('modal-root') || document.body;

  return ReactDOM.createPortal(
    <ModalOverlay onClick={handleOverlayClick} overlayBackground={overlayBackground}>
      <ModalContainer onClick={handleModalClick} height={height}>
        {children}
      </ModalContainer>
    </ModalOverlay>,
    modalRoot
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  height: PropTypes.number,
  children: PropTypes.node.isRequired,
  open: PropTypes.bool,
  overlayBackground: PropTypes.string,
};

export default Modal;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  background-color: ${({ overlayBackground }) => overlayBackground || ' rgba(215, 215, 215, 0.5)'};
`;

const ModalContainer = styled.div`
  position: fixed;
  display: flex;
  height: ${({ height }) => height}px;
  top: 50%;
  left: 50%;
  width: 270px;
  transform: translate(-50%, -50%);
  z-index: 1000;
  background-color: ${colors.secondary[10]};
  justify-content: center;
  box-shadow: 5px 7px 11.6px 0px #3f3f4d12;
  box-sizing: border-box;
  border-radius: 16px;
`;
