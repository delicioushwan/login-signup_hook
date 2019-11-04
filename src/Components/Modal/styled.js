import styled from 'styled-components';

export const ModalWrap = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10000;
`

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  z-index: 10000;
`

export const Wrap = styled.div`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  background-color: #fff;
  box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.6);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10001;
`

export const Header = styled.header`
  height: 50px;
  padding: 0 10px;
  line-height: 50px;
  position: relative;

  > h1 {
    font-size: 35px;
    padding: 10px;
    padding-top: 15px;
    margin: 0;
  }
`

export const CloseBtn = styled.span`
  cursor: pointer;
  position: absolute;
  top: 35%;
  right: 10px;
  transform: translateY(-50%);
`

export const Body = styled.div`
  padding: ${props => props.padding ? `${props.padding}` : '10px'};
  overflow-y: auto;
  position: absolute;
  top: 50px;
  left: 0;
  right: 0;

  &::-webkit-scrollbar {
    width: 3px;
  }
  &::-webkit-scrollbar-button {
    height: 0;
  }
  &::-webkit-scrollbar-track {
    width: 0;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #363d4a;
  }
`