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
        color: ${({ theme }) => theme.colors.background};
        background-color: ${({ theme }) => theme.colors.white};
    }
    .tutLoading{
        box-sizing: border-box;
        width: 80%;
        border-radius: 5px;
    }
    .divImage{
        img{
            width: 50px;
        }
    }
    .flex{
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    .eachTutorial{
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        background-color: ${({ theme }) => theme.colors.background};
        border-radius: 5px;
        width: 80%;
        padding: 5px;
        color: ${({theme}) => theme.colors.white};
        img{
            width: 30px;
        }
    }
`