import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

body {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    background-color: ${({ theme }) => theme.colors.primaryBackground};
  }

  input, textarea {
    font-family: 'Poppins', sans-serif;
  }
`;

export default GlobalStyles;
