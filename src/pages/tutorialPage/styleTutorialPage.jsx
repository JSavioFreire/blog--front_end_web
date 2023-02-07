import styled from "styled-components";

export const TutorialPageStyle = styled.div`
    margin: 100px 0 50px 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    .each{
        width: 70%;
        border-radius: 10px;
        padding: 10px 50px;
        background-color: ${({ theme }) => theme.colors.white};
        color: ${({ theme }) => theme.colors.background};
        iframe{
            padding: 20px 0;
        }
        h3{
            margin-bottom: 0;
        }
        .little{
            font-size: 11px;
            margin: 0;
        }
  
    }
`