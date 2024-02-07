import { styled } from "styled-components";


export const StyledHeader = styled.header`
    @media screen and (max-width: 768px){
        position: relative; 
        width: 100%;
        /* position: fixed;
        background-color: transparent;
        width: 100vw; */
    }

    .header-container{
        padding: 10px 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .hidden .header-container{
        animation: none;
    }

    .visible .header-logo{
        fill: ${p => p.theme.color.text_color};
        transition: fill ${p => p.theme.transition.main_transition};
        animation: slideLeft 1s ease forwards;

        &:hover, &:focus{
            fill: ${p => p.theme.color.main_color};
        } 
    }

    @keyframes slideLeft {
        0%{
            opacity: 0;
            transform: translateX(-100px);
        }
        100%{
            opacity: 1;
            transform: translateX(0px);
        }
    }

    .hidden .mob-menu-btn{
        animation: none;
    }

    .visible .mob-menu-btn{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: transparent;
        animation: slideRight 1s ease forwards;
       
        .burger-icon{
            stroke: ${p => p.theme.color.text_color};
        }

        .menu-close-icon{
            fill: transparent;
            stroke: ${p => p.theme.color.text_color};
        }

        @media screen and (min-width: 768px){
            display: none;
        }
    }

    @keyframes slideRight {
        0%{
            opacity: 0;
            transform: translateX(100px);
        }
        100%{
            opacity: 1;
            transform: translateX(0px);
        }
    }

    .mob-menu{
        top: 58px;
        left: 0;
        position: absolute;
        z-index: 999;
        width: 100vw;
        height: auto;
        padding-bottom: 20px;
        padding-left: 15px;
        background-color: ${p => p.theme.color.second_bg_color};
        transform: translateX(-100%);
        transition: transform ${p => p.theme.transition.main_transition};
        
        @media screen and (min-width: 768px){
            display: none;
        }
    }

    .is-active{
        transform: translateX(0);
    }

    .main-menu{
        display: none;

        @media screen and (min-width: 768px){
            display: block;
        }
    }
` 