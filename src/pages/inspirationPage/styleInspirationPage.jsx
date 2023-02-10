import styled from "styled-components";

export const StyleInspirationPage = styled.div`
    margin: 100px 0 50px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    .each{
        background-color: ${({ theme }) => theme.colors.white};
        width: 70%;
        border-radius: 10px;
        padding: 10px 50px;
        color: ${({ theme }) => theme.colors.background};
        h3{
            margin-bottom: 0;
        }
        .little{
            display: flex ;
            p{
            margin-right: 20px;
            margin-top: 0;
            font-size: 11px;
            }
        }
        img{
            width: 500px;
        }
    }
`