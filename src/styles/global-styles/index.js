import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        font-family: 'Plus Jakarta Sans', sans-serif;
        color: ${props => props.theme.colors.fontWhite};
    }

    body{
        a{
            text-decoration: none;
        }
    }
`