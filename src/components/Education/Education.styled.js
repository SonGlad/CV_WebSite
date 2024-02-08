import { styled } from "styled-components";


export const EducationStyled = styled.div`
    padding: 20px 0;

    @media screen and (min-width: 768px){
        padding: 30px 0;
    }

    .education-list{
        margin-left: 10px;
        padding-left: 15px;
        position: relative;

        &:before{
            position: absolute;
            content: '';
            top: 0;
            left: 0;
            background-color: ${p => p.theme.color.main_color};
            width: 2px;
            animation: slideDown 2s 2.2s ease forwards;
        }
    }

    @keyframes slideDown {
        0%{
            height: 0%;
        }
        100%{
            height: 100%;
        }
        
    }


    .education-item{
        position: relative;
   
        &:after{
            position: absolute;
            top: 0;
            left: 0;
            content: '';
            width: 15px;
            height: 15px;
            background-color: ${p => p.theme.color.main_color};
            border-radius: 50%;
            transform: translate(-22px, 0px);
            animation: afterAppear .1s ease forwards;
            animation-delay: calc((0.4s * var(--i) + 2.2s));
            opacity: 0;
        }
    }

    @keyframes afterAppear  {
        0%{
            opacity: 1;
        }
        100%{
            opacity: 1;
        }
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
    }

    .education-text-cont{
        text-align: justify;
        margin-bottom: 20px;
        border: 2px solid ${p => p.theme.color.main_color};
        border-radius: 10px;
        padding: 10px;
        animation: slideContent 0.9s ease forwards;
        animation-delay: calc(0.3s * var(--i));
        opacity: 0;

        @media screen and (min-width: 768px){
            max-width: 50%;
            margin-right: 20px;
            margin-bottom: 0;
        }
    }


    @keyframes slideContent  {
        0%{
            opacity: 0;
            transform: translateX(-500px);
        }
        100%{
            opacity: 1;
            transform: translateX(0px);
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

`