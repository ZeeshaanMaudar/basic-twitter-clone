import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  border-bottom: 1px solid #eee;
  padding: 10px 10px 30px 10px;
  display: flex;
  align-items: flex-start;
  font-family: Roboto;
  margin-top: 30px;
`;

export const ProfilePic = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%
`
export const TweetContent = styled.div`
  width: 100%;
  margin-left: 10px;
`

export const TweetHeader = styled.div`
  font-family: Roboto;
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const HeaderLeft = styled.div`
  
  display: block;

  @media screen and (min-width: 550px) {
    display: flex;
    align-items: center;
  }
`

export const NameWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;

  @media screen and (min-width: 550px) {
    margin-bottom: 0;
  }
`

export const VerifiedImage = styled.img`
  width: 18px;
  height: 18px;
  margin-left: 5px;
  margin-bottom: 5px;
  
  @media screen and (min-width: 550px) {
    margin-bottom: 0;
  }
`

export const HeaderRight = styled.div`
 
`

export const StyledLink = styled(Link)`
  text-decoration: none;
`

export const FirstName = styled.h4`
  color: #000;
  margin-bottom: 5px;

  @media screen and (min-width: 550px) {
    margin-bottom: 0;
  }
`

export const UserName = styled.p`
  color: #828282;
  margin-left: 5px;
  margin-bottom: 5px;

  @media screen and (min-width: 550px) {
    margin-bottom: 0;
  }
`

export const StyledDate = styled.p`
  margin-left: 5px;
  margin-bottom: 5px;

  @media screen and (min-width: 550px) {
    margin-bottom: 0;
  }
`

export const StyledTweet = styled.p`
  font-size: 12px;
  margin: 10px 0 10px 0;

  @media screen and (min-width: 550px) {
    font-size: 16px;
  }
`