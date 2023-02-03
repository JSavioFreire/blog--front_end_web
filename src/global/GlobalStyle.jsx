import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        font-family: 'Montserrat', sans-serif;
        overflow-x: hidden;
        color: ${({theme})=> theme.colors.white};
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