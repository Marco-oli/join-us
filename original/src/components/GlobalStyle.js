import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        outline: 0;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'Montserrat', sans-serif;
    }

    button {
        cursor: pointer;
    }
`;

export default GlobalStyle;