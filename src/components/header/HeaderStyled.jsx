import styled from "styled-components";

export const HeaderStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: black;
    color: ${({ theme }) => theme.colors.white};
    padding-left: 20px;
    padding-right: 20px;
    z-index: 1;
    position: fixed;
    top: 0;
    width: 100%;
    .logo{
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
        font-family: 'Share Tech', sans-serif;
        .bar{
            animation: barOpacity 0.7s infinite;

    @keyframes barOpacity {
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
        }
    }    
        }
    }
    .active{
        border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
    }
    .menu{
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
        li{
            font-size: 24px;
            font-weight: bold;
            border-bottom: 2px solid black;
            border-top: 2px solid black;
            margin-right: 35px;
           
        :hover{
            border-top: 2px solid ${({ theme }) => theme.colors.primary};
        }
        }
    }
`