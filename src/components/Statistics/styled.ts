import styled from 'styled-components';

export const Wrapper = styled.div`
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

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 300px;
  border-bottom: 1px solid #ddd;
  margin-bottom: 10px;
`

export const Heading = styled.h4`
  color: #000;
  margin-bottom: 5px;
  font-weight: 500;

  @media screen and (min-width: 550px) {
    margin-bottom: 0;
  }
`

export const NumberOfTweets = styled.span`
  color: #848484;
`

export const SpinnerWrapper = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
`;
