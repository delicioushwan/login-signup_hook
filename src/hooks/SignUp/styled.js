import styled from 'styled-components';

export const Form = styled.form`
  padding: 0 10px;
`

export const Btn = styled.button`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  cursor: pointer;
  height: 50px;
  font-size: 30px;
  margin-top: 5px;
  padding: 0;

  &:hover {
    background: #daa520;
    color: white;
  }

  &:disabled {
    pointer-events: none;
  }
`
