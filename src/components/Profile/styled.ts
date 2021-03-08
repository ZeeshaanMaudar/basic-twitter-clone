import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  width: 80px;
  height: 32px;
  background: #1DA1F2;
  color: #fff;
  border-radius: 15px;
  padding: 3px 10px 3px 10px;
  text-decoration: none;
  font-size: 15px;

  &:hover {
    background: #0a76b9
  }

  @media screen and (min-width: 550px) {
    width: 100px;
    font-size: 18px;
    padding: 5px 12px 5px 12px;
  }
`;

export const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 30px;
`

export const ProfilePic = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 3px solid #ddd;
  margin-right: 20px;

  @media screen and (min-width: 550px) {
    width: 150px;
    height: 150px;
    border: 5px solid #ddd;
  }
`

export const FullName = styled.h4`
  margin-bottom: 10px;
`

export const Username = styled.p`
  margin-bottom: 10px;
  color: #848484;
`

export const BirthDate = styled.p`
  color: #848484;
`
