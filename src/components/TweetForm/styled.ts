import styled from 'styled-components';

export const Wrapper = styled.div`
  border: 1px solid #eee;
  margin-bottom: 30px;
  padding: 10px;
`;

export const Title = styled.h2`
  color: #141F45;
  font-family: Roboto;
  font-weight: 700;
  font-size: 25px;
  line-height: 42px;
  letter-spacing: 2px;
  margin: 0;
  margin-bottom: 30px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  border: none;
  padding: 5px 5px 5px 20px;
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

export const ProfilePic = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`

export const FormHeader = styled.div`
  display: flex;
  margin-bottom: 20px;
`

export const FormFooter = styled.div`
  display: flex;
  justify-content: flex-end;
`
