import { styled } from "styled-components";


export const StyledHeader = styled.header`
    @media screen and (max-width: 768px){
        position: relative; 
    }

    .header-container{
        padding: 10px 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .header-logo{
        fill: ${p => p.theme.color.text_color};
        transition: fill ${p => p.theme.transition.main_transition};

        &:hover, &:focus{
            fill: ${p => p.theme.color.main_color};
        } 
    }


    .nav-link.active{
        color: ${p => p.theme.color.main_color};
    }


    .mob-menu-btn{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: transparent;

        @media screen and (min-width: 768px){
            display: none;
        }
        
        .burger-icon{
            stroke: ${p => p.theme.color.text_color};
        }

        .menu-close-icon{
            fill: transparent;
            stroke: ${p => p.theme.color.text_color};
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