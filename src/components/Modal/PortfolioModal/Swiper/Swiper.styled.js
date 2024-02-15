import styled from "styled-components";

export const SwiperStyled = styled.div`
    background-color: transparent;
    width: 100%;
    height: auto;

    .swiper {
        width: 100%;
        padding-top: 5px;
        padding-bottom: 30px;
    }

    .swiper-slide {
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        width: 100%;
        height: 150px;
        border-radius: 10px;

        @media screen and (min-width: 400px){
            height: 200px;
        }
        @media screen and (min-width: 500px){
            height: 230px;
        }
        @media screen and (min-width: 768px){
            width: 500px;
            height: 260px;
        }
        @media screen and (min-width: 1200px){
            width: 550px;
            height: 290px;
        }
    }

    .swiper-pagination {
        bottom: 0;
    }

    .swiper-pagination-bullet {
        width: 10px;
        height: 10px;
        opacity: 1;
        background: rgba(255, 255, 255, 0.5);
    }

    .swiper-pagination-bullet-active {
        background: ${p => p.theme.color.main_color_rust_lighter};
    }


`