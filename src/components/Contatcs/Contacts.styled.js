import styled from "styled-components";


export const ContactsStyled = styled.div`
    padding: 20px 0;

    @media screen and (min-width: 768px){
        padding: 30px 0 10px 0;
    }

    .about-title{
        font-size: 56px;
        line-height: 120%;
        font-weight: 700;
        text-align: center;

        & span{
            color: ${p => p.theme.color.main_color};
        }
    }

    .content-container{
        @media screen and (min-width: 768px){
            display: flex;
            column-gap: 20px;
        }
    }

    .form-container{
        width: 100%;
        padding: 50px 20px 0 20px;
        display: flex;
        justify-content: center;

        @media screen and (min-width: 768px){
            padding: 50px 40px 20px 40px;
            width: 50%;
        }
    } 

`