import { createGlobalStyle } from 'styled-components';

export const footerHeight = { mobile: 480, desktop: 200 };

export const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Open Sans Condensed';
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    #page-container {
        padding: 20px 50px ${footerHeight.desktop + 50}px;
        min-height: 100vh;
        position: relative;;

        @media screen and (max-width: 800px){
             padding: 10px;
             padding-bottom: ${footerHeight.mobile + 50}px;
         }
    }

    li {
        list-style: none;
    }

    a{
        text-decoration: none;
        color: black;
    }
`;
