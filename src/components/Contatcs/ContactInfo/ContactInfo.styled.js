import styled from "styled-components";


export const ContactInfoStyled = styled.div `
    width: 100%;
    padding: 20px 0;
    overflow: hidden;

    @media screen and (min-width: 768px){
        padding: 50px 0 20px 0;
        max-width: 50%;
        display: flex;
        flex-direction: column;
    }


    .container-title{
        font-size: 44px;
        font-weight: 700;
        margin-bottom: 30px;
        color: ${p => p.theme.color.main_color};
        text-align: center;
        height: 112px;
        animation: ContactTitleSlideDown 1s ease forwards;
        opacity: 0;

        @media screen and (min-width: 525px){
            height: auto;
        }

        @media screen and (min-width: 768px){
            text-align: start;
            font-size: 30px;
            font-weight: 600;
        }
        @media screen and (min-width: 910px){
            font-size: 37px;
            font-weight: 600;
        }
        @media screen and (min-width: 1050px){
            font-size: 44px;
            font-weight: 700;
        }
    }



    @keyframes ContactTitleSlideDown {
        0%{
            opacity: 0;
            transform: translateY(-100%);
        }
        100%{
            opacity: 1;
            transform: translateY(0px);
        }
    }  


    .contact-description{
        font-size: 16px;
        line-height: 24px;
        text-indent: 20px;
        text-align: justify;
        animation: ConatctTextSlideTop 1s ease forwards;
        opacity: 0;

        &::first-letter {
            font-size: 32px;
            color: ${p => p.theme.color.main_color};
        }
    }

    @keyframes ConatctTextSlideTop {
        0%{
            opacity: 0;
            transform: translateY(100%);
        }
        100%{
            opacity: 1;
            transform: translateY(0);
        }
    }



    .contact-links{
        margin: 40px 0;
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-wrap: wrap;
        gap: 15px;
        animation: ConatctLinksSlideLeft 0.8s 0.2s ease forwards;
        opacity: 0;

        @media screen and (max-width: 767px){
            animation: ConatctLinksZoomIn 0.8s 0.2s ease forwards;
        }

        @media screen and (min-width: 768px){
            align-items: flex-start;
            flex-direction: column;
        }
    }

    @keyframes ConatctLinksZoomIn {
        0%{
            opacity: 0;
            transform: scale(0.5);
        }
        100%{
            opacity: 1;
            transform: scale(1);
        }
    }

    @keyframes ConatctLinksSlideLeft {
        0%{
            opacity: 0;
            transform: translateX(50%);
        }
        100%{
            opacity: 1;
            transform: translateX(0);
        }
    }




    .contact-link{
        width: 220px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        fill: ${p => p.theme.color.text_color};
        transition: color ${p => p.theme.transition.main_transition},
                    fill ${p => p.theme.transition.main_transition};

        &:hover{
            color: ${p => p.theme.color.main_color};
            fill: ${p => p.theme.color.main_color};
        }
    }


    .contact-social-list{
        display: flex;
        align-items: center;
        gap: 20px;
        margin-bottom: 40px;
        justify-content: space-around;
        animation: ConatctSocialListSlideTop 1s ease forwards;
        opacity: 0;

        @media screen and (min-width: 400px){
            justify-content: center;
            gap: 60px;
        }
        @media screen and (max-width: 767px){
            animation: ConatctSocialListSlideDown 1s ease forwards;
        }
        @media screen and (min-width: 768px){
            justify-content: flex-start;
            gap: 30px;
            margin-left: 13px;
        }
    }

    @keyframes ConatctSocialListSlideDown {
        0%{
            opacity: 0;
            transform: translateY(-150%);
        }
        100%{
            opacity: 1;
            transform: translateY(0);
        }
    }
    @keyframes ConatctSocialListSlideTop {
        0%{
            opacity: 0;
            transform: translateY(150%);
        }
        100%{
            opacity: 1;
            transform: translateY(0);
        }
    }



    .contact-social-link{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        box-shadow: 0px 0px 10px 10px rgba(255, 255, 255, 0.12),
        0px 0px 10px 10px rgba(0, 0, 0, 0.12) inset;
        background-color: ${p => p.theme.color.text_color};
        fill: ${p => p.theme.color.main_color};
        transition: background-color ${p => p.theme.transition.main_transition},
                    fill ${p => p.theme.transition.main_transition},
                    box-shadow ${p => p.theme.transition.main_transition};        
        &:hover{
            background-color: ${p => p.theme.color.main_color};
            fill: ${p => p.theme.color.text_color};
            box-shadow: 0px 0px 10px 10px rgba(204, 57, 0, 0.12),
            0px 0px 10px 10px rgba(0, 0, 0, 0.12) inset;
        }
    }

    .redirect-cont{
        display: flex;
        align-items: center;
        justify-content: center;

        @media screen and (min-width: 768px){
            margin-top: auto;
            justify-content: flex-start;
        }
    }

    .redirect-link{
        padding: 14px 28px;
        border-radius: 15px;
        font-size: 16px;
        font-weight: 700;
        background-color: ${p => p.theme.color.text_color};
        color: ${p => p.theme.color.main_color};
        box-shadow: 0px 0px 10px 10px rgba(0,0,0,0.3) inset,
                    0px 0px 0px 0px rgba(0,0,0,0.3);
        transition: color ${p => p.theme.transition.main_transition}, 
                    background-color ${p => p.theme.transition.main_transition},
                    box-shadow ${p => p.theme.transition.main_transition};
        animation: ConatctRedicrectLinkSlideDown 1s ease forwards;
        opacity: 0;

        &:hover{
            background-color: ${p => p.theme.color.main_color};
            color: ${p => p.theme.color.text_color};
            box-shadow: 0px 0px 0px 0px rgba(0,0,0,0.3) inset,
                        0px 0px 10px 10px rgba(0,0,0,0.3);
        }

        @media screen and (max-width: 767px){
            animation: ConatctRedicrectLinkSlideTop 1s ease forwards;
        }
    }

    @keyframes ConatctRedicrectLinkSlideTop {
        0%{
            opacity: 0;
            transform: translateY(150%);
        }
        100%{
            opacity: 1;
            transform: translateY(0);
        }
    }
    @keyframes ConatctRedicrectLinkSlideDown {
        0%{
            opacity: 0;
            transform: translateY(-150%);
        }
        100%{
            opacity: 1;
            transform: translateY(0);
        }
    }
`