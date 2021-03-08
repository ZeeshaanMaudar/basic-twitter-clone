import styled from 'styled-components';

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const Button = styled.button`
  width: 80px;
  height: 32px;
  background: #1DA1F2;
  color: #fff;
  border-radius: 15px;
  border: none;
  outline: none;
  cursor: pointer;
  margin: 5px;

  &:hover {
    background: #0a76b9;
  }

  @media screen and (min-width: 550px) {
    width: 100px;
  }
`
