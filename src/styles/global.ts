import { createGlobalStyle } from 'styled-components';
import { mq } from './breakpoints';
import { theme } from './theme/theme';

const { margin, width } = theme;

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');

  * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
  }

  body {
    background-color: ${ props => props.theme.colors.background };
    color: ${ props => props.theme.colors.white };
    font-family: 'Poppins', sans-serif;
  }

  main {
    margin-top: 2.5rem;
  }

  h2 {
    margin-bottom: 20px;
    text-align: center;

    ${ mq[3] } {
      text-align: left;
    }
  }

  /* ${ mq[3] } {
    .container {
        margin: ${ margin.mAuto };
        max-width: ${ width.maxWidthLg };
        width: 100%;
    }
  } */
`;