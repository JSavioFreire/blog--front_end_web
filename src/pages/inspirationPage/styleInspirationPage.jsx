import styled from "styled-components";

export const StyleInspirationPage = styled.div`
    margin: 100px 0 50px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    .each{
        background-color: ${({theme})=> theme.colors.white};
        width: 70%;
        height: 200px;
        border-radius: 10px;
        padding: 10px 50px;
        color: ${({ theme }) => theme.colors.background};

    }
`