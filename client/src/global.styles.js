import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Open Sans Condensed';
        box-sizing: border-box;
    }

    body {
        padding: 20px 50px;
        
        @media screen and (max-width: 800px){
             padding: 10px
         }
    }

    a{
        text-decoration: none;
        color: black;
    }
`;
