import { styled } from "styled-components";



export const EducationStyled = styled.div`
    padding: 20px 0;

    @media screen and (min-width: 768px){
        padding: 30px 0;
    }

    .education-list{
        border-left: 2px solid ${p => p.theme.color.main_color};
        margin-left: 10px;
        padding-left: 15px;
    }

    .education-cont{
        margin-bottom: 60px;

        @media screen and (min-width: 768px){
            display: flex;
            justify-content: center;
        }
        @media screen and (min-width: 1280px){
            margin-bottom: 30px;
        }
        @media screen and (min-width: 1440px){
            align-items: center;
        }
    }

    .education-text-cont{
        text-align: justify;
        margin-bottom: 20px;
        position: relative;
        border: 2px solid ${p => p.theme.color.main_color};
        border-radius: 10px;
        padding: 10px;

        &:after{
            position: absolute;
            top: 0;
            left: 0;
            content: '';
            width: 15px;
            height: 15px;
            background-color: ${p => p.theme.color.main_color};
            border-radius: 50%;
            transform: translate(-25px, -2px);
        }

        @media screen and (min-width: 768px){
            max-width: 50%;
            margin-right: 20px;
            margin-bottom: 0;
        }
    }

    .education-title{
        font-size: 56px;
        line-height: 120%;
        font-weight: 700;
        text-align: center;
        margin-bottom: 40px;

        & span{
            color: ${p => p.theme.color.main_color};
        }
    }

    .education{
        display: flex;
        align-items: center;
        gap: 10px;
        color: ${p => p.theme.color.main_color};
        fill: ${p => p.theme.color.main_color};
        margin-bottom: 20px;
    }

    .degree-title{
        margin-bottom: 10px;
    }
    
    .degree-descr{
        margin-bottom: 10px;
        color: ${p => p.theme.color.main_color};
    }

    .degree-text{
        margin-bottom: 20px;
    }

    .education-link-cont{
        display: flex;
        align-items: center;
        gap: 20px;
    }

    .education-web-link{
        font-size: 20px;
        color: ${p => p.theme.color.text_color};
        transition: color ${p => p.theme.transition.main_transition};

        &:hover,
        &:focus{
            color: ${p => p.theme.color.main_color};
        }
    }

    .education-social-link{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        box-shadow: 0px 0px 5px 5px rgba(255, 255, 255, 0.12),
        0px 0px 5px 5px rgba(0, 0, 0, 0.12) inset;
        background-color: ${p => p.theme.color.text_color};
        fill: ${p => p.theme.color.main_color};
        transition: background-color ${p => p.theme.transition.main_transition},
                    fill ${p => p.theme.transition.main_transition},
                    box-shadow ${p => p.theme.transition.main_transition};
        
        &:hover,
        &:focus{
            background-color: ${p => p.theme.color.main_color};
            fill: ${p => p.theme.color.text_color};
            box-shadow: 0px 0px 5px 5px rgba(204, 57, 0, 0.12),
            0px 0px 5px 5px rgba(0, 0, 0, 0.12) inset;
        }
    }

    .education-picture-cont{
        border-radius: 20px;
        display: flex;
        justify-content: center;
        overflow: hidden;
        max-height: 295px;
        filter: saturate(0.5);
        
        
        
        @media screen and (min-width: 768px) {
            width: 50%;
            max-height: 488px;
        }
        @media screen and (min-width: 805px) {
            max-height: 475px;
        }
        @media screen and (min-width: 1024px) {
            align-items: center;
            max-height: 360px;
        }
        @media screen and (min-width: 1185px) { 
            max-height: 328px;
        }
        @media screen and (min-width: 1395px) { 
            max-height: 310px;
        }
        @media screen and (min-width: 1482px) { 
            max-height: 273px;
        }
        @media screen and (min-width: 2050px) { 
            max-height: 255px;
        }
        @media screen and (min-width: 2582px) { 
            max-height: 236px;
        }
    }

    .education-picture{
        height: auto;
        max-width: 100%;
        
        @media screen and (min-width: 768px) {
            max-width: fit-content;
        }
        @media screen and (min-width: 1482px) {
            max-width: none;
            width: 100%;
        }
    }
`