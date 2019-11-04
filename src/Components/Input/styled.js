import styled from 'styled-components';

export const InputContainer = styled.div`
  width: 100%;
  margin: ${props => props.margin ? props.margin : 0};
  input {
    border: ${props => props.hasErrors ? '1px solid #daa520' : '1px solid #666666'};
    width: 100%;
    height: 40px;
    font-size: 20px;
    padding-left: 10px;
    box-sizing: border-box;
  }
`

export const Ul = styled.ul`
  padding: 0px;
  margin: 0px;
  list-style-type: none;
  li {
    color: #daa520;
    padding: 2px;
    margin-bottom: 2px;
  }
`
