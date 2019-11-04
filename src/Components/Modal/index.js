import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import {
  ModalWrap,
  Overlay,
  Wrap,
  Header, CloseBtn,
  Body,
} from './styled';


const Modal = ({
  children, title, width, height, padding, isLoading, isShowing, notClosing,// props,
  modalHandler// props func
}) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
  
    return () => {
      document.body.style.overflow = '';
    };
  },[]);
  
  return (
    !isLoading && isShowing ? ReactDOM.createPortal(
    <>
      <ModalWrap>
        <Overlay onClick={!notClosing ? modalHandler : () => {}} />
        <Wrap width={width} height={height}>
          <Header>
            {title && <h1>{title}</h1>}
            <CloseBtn onClick={modalHandler}>
              &times;
            </CloseBtn>
          </Header>
      
          <Body padding={padding}>
            {children}
          </Body>
        </Wrap>
      </ModalWrap>
    </>, document.body
  ) : null
)}

Modal.propTypes = {
  title: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  modalHandler: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
}

Modal.defaultProps = {
  title: '',
  width: 500,
  height: 800,
  isLoading: false,
  notClosing: false,
}

export default Modal;