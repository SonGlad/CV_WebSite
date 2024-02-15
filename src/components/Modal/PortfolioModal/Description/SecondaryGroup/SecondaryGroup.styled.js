import styled from "styled-components"


export const SecondaryGroupStyled = styled.ul`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    column-gap: 20px;

    
    @media screen and (min-width: 420px){
        justify-content: space-between;
    }

    .seconadry-group-item{
        min-width: 45%;
        font-weight: 400;
        font-size: 14px;
        line-height: calc(24/16);
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 10px;
        flex-wrap: wrap;

        & p::first-letter {
            text-transform: uppercase;
        }

        @media screen and (min-width: 550px){
            font-weight: 500;
            font-size: 18px;
        }
        @media screen and (min-width: 1000px){
            font-weight: 400;
            font-size: 14px;
        }
        @media screen and (min-width: 1440px){
            font-weight: 500;
            font-size: 18px;
        }
    }
`