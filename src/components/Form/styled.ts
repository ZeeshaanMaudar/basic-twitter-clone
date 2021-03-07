import styled from 'styled-components';

export const Wrapper = styled.div`
  border: 1px solid #eee;
  margin-bottom: 30px;
  padding: 10px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  border: none;
  padding: 5px;
  resize: none;

  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  width: 80px;
  height: 32px;
  background: #1DA1F2;
  color: #fff;
  border-radius: 15px;
  border: none;
  outline: none;
  cursor: pointer;

  &:hover {
    background: #0a76b9
  }

  @media screen and (min-width: 550px) {
    width: 100px;
  }
`;
