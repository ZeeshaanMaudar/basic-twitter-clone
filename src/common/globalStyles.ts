import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
  }

  body {
    font-family: Roboto;
  }

  h4 {
    font-size: 17px;
    color: #000;

    @media screen and (min-width: 550px) {
      font-size: 20px;
    }
  }

  h6 {
    font-size: 12px;
  }

  p {
    font-size: 12px;
  }
`

export default GlobalStyle;