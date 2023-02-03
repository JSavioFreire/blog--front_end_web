import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        font-family: 'Montserrat', sans-serif;
        overflow-x: hidden;
        color: ${({ theme }) => theme.colors.white};
        background-color: ${({ theme }) => theme.colors.background};
    }
    a{
        color: ${({ theme }) => theme.colors.white};
        text-decoration: none;
    }
    li{
        list-style: none;

    }
`

export const theme = {
    colors: {
        background: '#1C1C1C',
        white: '#dddddd',
        whiteDark: '#8C8C8C',
        primary: '#4793E6'
    }

}