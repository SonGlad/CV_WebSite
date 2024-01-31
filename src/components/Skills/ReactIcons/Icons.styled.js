import { styled } from "styled-components";


export const IconsStyledList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    flex-wrap: wrap;

    .icons-list{
        border-radius: 15px;
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100px;
        height: 100px;
        box-shadow: 0px 0px 10px 10px rgba(0,0,2,0.5);
        position: relative;
        overflow: hidden;

        @media screen and (min-width: 768px){
            width: 150px;
            height: 150px;
        }

        @media screen and (min-width: 1440px){
            width: 200px;
            height: 150px;
        }
    }

    .icons{
        fill: ${p => p.theme.color.text_color};
        width: 50px;
        height: 50px;
        transform: scale(1);
        transition: transform ${p => p.theme.transition.main_transition};
    }

    .icons-list:hover .icons{
        transform: scale(1.3);
    }

    .value-cont{
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(rgba(0, 0, 0, 0.4), ${p => p.theme.color.main_color});
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;
        transform: translateY(150px);
        transition: transform ${p => p.theme.transition.main_transition};

        @media screen and (min-width: 768px) {
            padding: 25px 0px 15px 0px;
        }

        @media screen and (min-width: 1440px) {
            padding: 20px 0px 15px 0px;
        }
    }

    .icons-list:hover .value-cont{
        transform: translateY(0px);
    }
    
    .value-text{
        font-size: 16px;
        font-weight: 500;
        text-align: center;
        transform: translateY(8px);

        @media screen and (min-width: 768px) {
            font-size: 20px;
            transform: translateY(0px);
        }

        @media screen and (min-width: 1440px) {
            font-size: 24px;
        }
    }

    .redirect-link{
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;

        @media screen and (min-width: 768px) {
            width: 40px;
            height: 40px;
        }

        @media screen and (min-width: 1440px) {
            width: 50px;
        }
    }

    .redirect-icon{
        fill: ${p => p.theme.color.text_color};
        transition: fill ${p => p.theme.transition.main_transition};
    }

    .redirect-link:hover .redirect-icon{
        fill: ${p => p.theme.color.second_bg_color};
    }

`