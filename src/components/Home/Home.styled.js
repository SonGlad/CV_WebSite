import { styled } from "styled-components";
import Photo from "../../images/images/my_photo_1.jpg";



export const HomeStyledContainer = styled.div`
    display: flex;
    flex-direction: column;

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

        @media screen and (min-width: 768px){
            padding: 100px 0;
            max-width: 50%;
        }
    }

    .title{
        font-size: 56px;
        line-height: 120%;
        font-weight: 700;
        text-align: center;

        @media screen and (min-width: 768px){
            text-align: start;
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
    }

    .lower-text{
        margin-bottom: 60px;
    }

    .btn-cont{
        @media screen and (max-width: 768px){
            width: 100%;
            display: flex;
        }
    }

    .download-btn{
        @media screen and (max-width: 768px){
            margin: auto;
        }

        padding: 14px 28px;
        border-radius: 15px;
        font-size: 16px;
        font-weight: 700;
        background-color: transparent;
        border: 2px solid ${p => p.theme.color.main_color};
        color: ${p => p.theme.color.main_color};
        box-shadow: 0px 0px 20px 20px rgba(204, 57, 0, 0.12),
        0px 0px 20px 20px rgba(0, 0, 0, 0.12) inset;
        transition: color ${p => p.theme.transition.main_transition}, 
                    background-color ${p => p.theme.transition.main_transition},
                    box-shadow ${p => p.theme.transition.main_transition};

        &:hover, &:focus{
            background-color: ${p => p.theme.color.main_color};
            color: ${p => p.theme.color.text_color};
            box-shadow: none
        }
    }

    .right-container{

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

`