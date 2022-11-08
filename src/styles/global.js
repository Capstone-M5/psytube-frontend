import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0px;
        padding: 0px;
        list-style: none;
    } 
    
    body {
        text-align: center;
        background: rgb(24, 24, 24);
        background: -moz-linear-gradient(25deg, rgba(24, 24, 24, 1) 0%, rgba(24, 24, 24, 1) 66%,  rgba(80, 80, 80, 0.88) 100%);
        background: -webkit-linear-gradient(25deg,rgba(24, 24, 24, 1) 0%, rgba(24, 24, 24, 1) 66%, rgba(80, 80, 80, 0.88) 100%);
        background: linear-gradient(25deg, rgba(24, 24, 24, 1) 0%, rgba(24, 24, 24, 1) 66%, rgba(80, 80, 80, 0.88) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#181818",endColorstr="#505050",GradientType=1);
    }

    :root{
        --toastify-color-dark: #1c1c1c;
    }  
     
    h1, h2, h3, h4, h5, h6{
        font-family: 'Sarpanch', sans-serif;

    }
`;
