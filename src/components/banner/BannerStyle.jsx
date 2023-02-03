import styled from "styled-components";

export const BannerStyle = styled.div`
    background-color: #1C1C1C;
    height: 70vh;
    width: 100%;
    background-image: cover;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    width: 100vw;
    padding: 100px;
   h1{
    color: ${({ theme }) => theme.colors.white};
    font-size: 100px;
    text-decoration: underline;
    text-decoration-color: ${({ theme }) => theme.colors.primary};
   }
`