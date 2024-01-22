import { styled } from "styled-components";


export const LinkListStyled = styled.ul`
    font-size: 18px;
    font-weight: 600;

    @media screen and (min-width: 768px) {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
    }


    .link-list-item{
        margin-top: 20px;

        @media screen and (min-width: 768px){
            margin-top: 0;
            position: relative;
        }
    }

    .nav-link{
        transition: color ${p => p.theme.transition.main_transition};

        @media screen and (min-width: 768px){
            &:after{
                position: absolute;
                content: '';
                width: 100%;
                height: 3px;
                border-radius: 50%;
                bottom: -2px;
                background-color: ${p => p.theme.color.main_color};
                transform-origin: right;
                transform: translateX(-100%) scaleX(0);
                transition: transform ${p => p.theme.transition.main_transition};
            }

            &:focus::after,
            &:hover::after,
            &.active::after {
                transform-origin: left;
                transform: translateX(-100%) scaleX(1);
            }
        }

        &:hover, 
        &:focus{
            color: ${p => p.theme.color.main_color};
        }
    }

    .nav-link.active{
        color: ${p => p.theme.color.main_color};
    }  
`