import { styled } from "styled-components";



export const SwiperStyled = styled.div`
    border-radius: 20px;
    display: flex;
    justify-content: center;
    overflow: hidden;
    max-height: 295px;
    cursor: grab;
    position: relative;
    animation: slideSwiper 0.9s ease forwards;
    animation-delay: calc(0.3s * var(--i));
    opacity: 0;

    @keyframes slideSwiper  {
        0%{
            opacity: 0;
            transform: translateX(500px);
        }
        100%{
            opacity: 1;
            transform: translateX(0px);
        }
    }
    

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


    .swiper {
        width: 100%;
        
        @media screen and (min-width: 768px) {
            height: 100%;
        }
    }


    .swiper-slide {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .swiper-slide img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        filter: saturate(0.5);

    }

    .swiper-pagination-bullet {
        width: 10px;
        height: 10px;
        opacity: 1;
        background: rgba(0, 0, 0, 0.5);
    }

    .swiper-pagination-bullet-active {
        background: ${p => p.theme.color.main_color_rust_lighter};
    }

    .img-btn{
        position: absolute;
        top: 45%;
        left: 2%;
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(0, 0, 0, 0.7);
        border-radius: 50%;
        fill: ${p => p.theme.color.main_color};
        transition: background-color ${p => p.theme.transition.main_transition},
                    fill ${p => p.theme.transition.main_transition};
        

        &:hover{
            background-color: rgba(0, 0, 0, 1);
            fill: ${p => p.theme.color.text_color};
        }
    }
`