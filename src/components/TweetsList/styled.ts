import styled from 'styled-components';
import { SpinnerCircular } from 'spinners-react';

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

export const Spinner = styled(SpinnerCircular)`
  display: block;
  margin: 0 auto;
  padding-bottom: 40px;
`
