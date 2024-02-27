import { styled } from "styled-components";
import Photo from "../../images/images/my_photo_1.jpg";



export const HomeStyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 80vh;

    .order-one{
        order: 2;
    }
    .order-two{
        order: 1;
    }

    @media screen and (min-width: 768px){
        flex-direction: row;

        .order-one{
            order: 1;
        }
        .order-two{
            order: 2;
        }
    }

    .left-container{
        width: 100%;
        padding: 50px 0;
        overflow: hidden;

        @media screen and (min-width: 768px){
            padding: 50px 0 25px 0;
            max-width: 50%;
        }
    }

    .title{
        font-size: 56px;
        line-height: 120%;
        font-weight: 700;
        text-align: center;
        animation: titleSlideDown 1s ease forwards;
        opacity: 0;

        @media screen and (min-width: 768px){
            text-align: start;
        }
    }

    @keyframes titleSlideDown {
        0%{
            opacity: 0;
            transform: translateY(-100%);
        }
        100%{
            opacity: 1;
            transform: translateY(0px);
        }
    }   


    .title-animated{
        font-size: 44px;
        font-weight: 700;
        margin: 30px 0;
        color: ${p => p.theme.color.main_color};
        text-shadow: 0px 0px 40px ${p => p.theme.main_color_rust_lighter};
        text-align: center;
        height: 112px;
        animation: titleSlideRight 1s ease forwards;
        opacity: 0;

        @media screen and (min-width: 525px){
            height: auto;
        }
        @media screen and (min-width: 768px){
            text-align: start;
            font-size: 30px;
            font-weight: 600;
            margin-left: 10px;
        }
        @media screen and (min-width: 910px){
            font-size: 37px;
            font-weight: 600;
        }
        @media screen and (min-width: 1050px){
            font-size: 44px;
            font-weight: 700;
            margin-left: 15px;
        }
    }

    @keyframes titleSlideRight {
        0%{
            opacity: 0;
            transform: translateX(-100%);
        }
        100%{
            opacity: 1;
            transform: translateX(0px);
        }
    }  


    .Typewriter__cursor{
        font-size: 44px;
        font-weight: 300;
        color: ${p => p.theme.color.text_color};
    }

    .text-description{
        font-size: 16px;
        line-height: 24px;
        text-indent: 20px;
        text-align: justify;

        &::first-letter {
            font-size: 32px;
            color: ${p => p.theme.color.main_color};
        }
    }

    .upper-text{
        margin-bottom: 15px;
        animation: upperTextSlideTop 1s ease forwards;
        opacity: 0;
    }

    @keyframes upperTextSlideTop {
        0%{
            opacity: 0;
            transform: translateY(100%);
        }
        100%{
            opacity: 1;
            transform: translateY(0);
        }
    }

    .lower-text{
        margin-bottom: 60px;
        animation: lowerTextSlideLeft 1s 0.2s ease forwards;
        opacity: 0;
    }

    @keyframes lowerTextSlideLeft {
        0%{
            opacity: 0;
            transform: translateX(50%);
        }
        100%{
            opacity: 1;
            transform: translateX(0);
        }
    }

    .btn-cont{
        min-height: 54px;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 40px;
        justify-content: space-around;
        animation: btnContSlideToTop 1s ease forwards;
        opacity: 0;

        @media screen and (max-width: 767px){
            width: 100%;
            display: flex; 
        }
    }

    @keyframes  btnContSlideToTop{
        0%{
            opacity: 0;
            transform: translateY(200%);

        }
        100%{
            opacity: 1;
            transform: translateY(0);
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
                    fill ${p => p.theme.transition.main_transition}, 
                    background-color ${p => p.theme.transition.main_transition},
                    box-shadow ${p => p.theme.transition.main_transition};
        animation: redirectLinkAppear 1s ease forwards;
        animation-delay: calc((0.3s * var(--i) + 0.5s));
        opacity: 0;

        &:hover{
            background-color: ${p => p.theme.color.main_color};
            color: ${p => p.theme.color.text_color};
            fill: ${p => p.theme.color.text_color};
            box-shadow: 0px 0px 0px 0px rgba(0,0,0,0.3) inset,
                        0px 0px 10px 10px rgba(0,0,0,0.3);
        }

        @media screen and (max-width: 767px){
            margin: auto;
        }
    }

    @keyframes redirectLinkAppear {
        0%{
            scale: 0.5;
            opacity: 0;
        }
        100%{
            scale: 1;
            opacity: 1;
        }
    }

    .redirect-cont{
        margin-top: 40px;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        column-gap: 10px;
        row-gap: 20px;
        flex-wrap: wrap;
    }

    .redirect{
        padding: 5px 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        fill: ${p => p.theme.color.second_bg_color};
        /* stroke: blue; */
    }


    .right-container{
        animation: homePhotoAppear 2s ease forwards;
        opacity: 0;

        @media screen and (max-width: 767px){
            width: 100%;
            height: 500px;
            -webkit-box-shadow: 0px 0px 25px 40px rgba(8, 27, 41, 1) inset;
            -moz-box-shadow: 0px 0px 25px 40px rgba(8, 27, 41, 1) inset;
            box-shadow: 0px 0px 25px 40px rgba(8, 27, 41, 1) inset;
        }
        
        width: 100%;
        height: auto;
        overflow: hidden;
        border-radius: 12px;
        background-image: url(${Photo});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
       -webkit-box-shadow: 20px 0px 25px 40px rgba(8, 27, 41, 1) inset;
        -moz-box-shadow: 20px 0px 25px 40px rgba(8, 27, 41, 1) inset;
        box-shadow: 20px 0px 25px 40px rgba(8, 27, 41, 1) inset;
    }

    @keyframes homePhotoAppear {
        0%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }
    }

`