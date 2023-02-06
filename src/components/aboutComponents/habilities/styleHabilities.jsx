import styled from "styled-components";

export const EachHability = styled.div`
    width: 100%;
    border: 1px solid white;
    height: 200px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 10px;
    box-sizing: border-box;
    img{
        width: 30%;
        max-height: 80px;
        border: none;
        margin-top: 10px;
    }
    h1{
        font-size: 20px;
    }
    p{
        font-size: 14px;
    }
`