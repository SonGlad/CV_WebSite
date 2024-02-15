import { styled } from "styled-components";


export const EducationStyled = styled.div`
    max-width: calc(100% - 48px);
    max-height: calc(100% - 24px);


    .div-for-pic{
        position: relative;
    }

    .close-btn{
        position: absolute;
        top: 10px;
        right: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5px;
        background-color: ${p => p.theme.color.text_color};
        border-radius: 50%;
        box-shadow: 0px 0px 10px 10px rgba(0,0,0,0.3) inset,
                    0px 0px 0px 0px rgba(0,0,0,0.3);
        transition: transform ${p => p.theme.transition.main_transition},
        background-color ${p => p.theme.transition.main_transition},
        box-shadow ${p => p.theme.transition.main_transition};

        &:hover, 
        &:focus{
            transform: rotate(90deg);
            background-color: ${p => p.theme.color.main_color};
            box-shadow: 0px 0px 0px 0px rgba(0,0,0,0.3) inset,
                        0px 0px 10px 10px rgba(0,0,0,0.3);
        }
    }

    .close-icon{
        fill: ${p => p.theme.color.black};
        transition: all ${p => p.theme.transition.main_transition};
        width: 16px;
        height: 16px;

        @media screen and (min-width: 768px) {
            width: 24px;
            height: 24px;
        }
        @media screen and (min-width: 1440px) {
            width: 36px;
            height: 36px;
        }
    }

    .close-btn .close-icon:hover,
    .close-btn .close-icon:focus{
        fill: ${p => p.theme.color.text_color};
    }



    .swiper {
        width: 95%;
        height: auto;
    }

    .swiper-wrapper{
        align-items: center;
    }

    .swiper-slide {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .swiper-slide img {
        border-radius: 10px;
        width: 100%;
        height: 100%;
    }

    .swiper-button-next,
    .swiper-button-prev{
        color: ${p => p.theme.color.main_color}
    }

`