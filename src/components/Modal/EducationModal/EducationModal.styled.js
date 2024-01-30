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
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        border: none;
        cursor: pointer;
        background-color: transparent;
        transition: ${p => p.theme.transition.main_transition};

        &:hover,
        &:focus{
            transition: ${p => p.theme.transition.main_transition};
            transform: scale(1.2) rotate(90deg);
            transform-origin: center;
        }

        @media screen and (min-width: 768px){
            top: 20px;
            right: 20px;
        }
    }

    .close-icon{
        fill: ${p => p.theme.color.main_color};
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