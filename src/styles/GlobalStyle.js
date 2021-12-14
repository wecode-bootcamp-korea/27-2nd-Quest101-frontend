import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import theme from './theme';

const GlobalStyle = createGlobalStyle`
    ${reset}
    *{
        box-sizing: border-box;
    }

    body {
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap');
        font-family: "Noto Sans KR", sans-serif;

    }
    
    input {
        border: none;
        background-color: transparent;
        outline: none;
    }

    textarea {
        border: none;
        background-color: transparent;
        outline: none;
    }

    button {
        padding: 0;
        border: none;
        background-color: transparent;
        outline: none;
        cursor: pointer;
    }

    img {
        width: 100%;
    }

    a {
        color:${theme.black};
        text-decoration: none;
    }

    ::selection {
        color: ${theme.white};
        background-color: #ff5600;
    }
`;

export default GlobalStyle;
