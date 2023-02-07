import styled from "styled-components";

export const StyleAboutMe = styled.div`
    margin-top: 150px;
    a{
        margin-left: 20px;
    }
    .flex{
        display: flex;
        justify-content: space-around;
    }
    .text{
        width: 50%;
        h1{
        text-indent: 20px;
    }
    p{
        font-size: 18px;   
    }
    h3{
        text-indent: 20px;
    }
    }
    .myImg{
        width: 500px;
        border-radius: 5px;
        box-shadow: 0px 0px 5px ${({ theme }) => theme.colors.primary};
    }
   ul{
        display: flex;
        font-size: 30px;
        justify-content: start;
        li{
            margin-right: 20px;
            cursor: pointer;
        }
   }
   .titleHab{
        margin-left: 50px;
   }
` 