import styled from "styled-components";

export const StyleInspirationBox = styled.div`
    width: 80%;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;
    .row{
        display: flex;
        .insp{
            cursor: pointer;
            width: 30%;
            height: 200px;
            background-size: 100% ;
            background-position: 50%;
            background-repeat: no-repeat;
            transition: 1s;
            border-radius: 5px;
            :hover{
                background-size: 110%;
            }
            .text{
                padding: 10px;
                box-sizing: border-box;
                left: 0;
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                opacity: 0;
                background-color: ${({theme}) => theme.colors.background};
                transition: 1s;
                h1{
                    margin: 0;
                }
                p{
                    margin: 0;
                    font-size: 13px;
                }
                img{
                    width: 20px;
                }
                h4{
                    margin: 0;
                    font-size: 15px;
                }
                .flex{
                    display: flex;
                    h4{
                        margin-right: 10px;
                    }
                }
                .dev{
                    display: flex;
                    h4{
                        font-size: 8px;
                        margin-right: 5px;
                    }
                    p{
                        font-size: 8px;
                    }
                }
                :hover{
                    opacity: 0.8;
                }
            }
        }
    }
`