import styled from 'styled-components';

export const Form = styled.form`
  padding: 0 10px;
`

export const Btn = styled.button`
  width: 100%;
  cursor: pointer;
  height: 30px;
  font-size: 20px;
  margin-top: 5px;
  border-radius: 20px;
  padding: 0;

  &:hover {
    background: #daa520;
    color: white;
  }
  &:disabled {
    pointer-events: none;
  }
`

export const Registration = styled.div`
  padding: 0 10px; 
`