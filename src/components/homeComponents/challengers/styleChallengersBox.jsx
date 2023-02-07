import styled from "styled-components";

export const ChallengersBoxStyle = styled.div`
    margin-top: 40px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.background};
    display: flex;
    justify-content: center;
    padding-bottom: 20px;
    .eighty{
        width: 80%;
        display: flex;
        align-items: flex-start;
    }
    .flex{
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        width: 100%;
    }
    .circle{
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background-color: #E6B457;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        cursor: pointer;
        :first-of-type{
            background-color: #70E662;
        }
        :last-of-type{
            background-color: #E66143;
        }
    }

`