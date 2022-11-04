import styled, { createGlobalStyle } from "styled-components";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const GlobalStyle = createGlobalStyle`
:root {
    --white: #fff;
    --purple-100: #f5f0ff;
    --purple-200: #5e3ea1;
    --dark: #000000;

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: var(--white);
        font-family: 'Lato', sans-serif;
        -webkit-font-smoothing: antialiased;
    }

    border-style, input, textarea, buttom {
        font-family: 'Lato', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 700;
    }
    
    button {
        cursor: pointer;
    }
}
`;

const Container = styled.div`
  background-color: var(--white);
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  grid-gap: 1rem;
  grid-template-areas:
    "header"
    "main";
`;
