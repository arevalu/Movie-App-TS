import { createGlobalStyle } from 'styled-components';

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
`;