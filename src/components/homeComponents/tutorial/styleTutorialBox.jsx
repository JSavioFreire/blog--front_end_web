import styled from "styled-components";

export const TutorialBoxStyle = styled.div`
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    min-height: 250px;
    .text{
        width: 45%;
    }
    .tut{
        box-sizing: border-box;
        padding: 10px;
        width: 45%;
        border-radius: 5px;
        color: ${({theme}) => theme.colors.background};
        background-color: ${({ theme }) => theme.colors.white};
    }
`