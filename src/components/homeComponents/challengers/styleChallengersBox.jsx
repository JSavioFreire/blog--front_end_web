import styled from "styled-components";

export const ChallengersBoxStyle = styled.div`
    margin-top: 40px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.background};
    display: flex;
    justify-content: center;
    .eighty{
        width: 80%;
        display: flex;
        align-items: flex-start;
    }

`