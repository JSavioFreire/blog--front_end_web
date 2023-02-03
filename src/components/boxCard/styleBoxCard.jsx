import styled from "styled-components";

export const BoxCardStyle = styled.div`
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
    background-color: ${({theme}) => theme.colors.background};
    z-index: 1;
    display: flex;
    justify-content: center;
    .boxInside{
        width: 80%;
        padding: 10px;
        border-radius: 5px;
        background-color: ${({theme}) => theme.colors.white};
        color: ${({theme})=> theme.colors.background};
    }
    section{
        display: flex;
        p{
            text-indent: 10px;
        }
        img{
            width: 300px;
            margin-left: 20px;
        }
    }
`