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
        }
    }

    .nav-link{
        transition: color ${p => p.theme.transition.main_transition};

        &:hover, 
        &:focus{
            color: ${p => p.theme.color.main_color};
        }
    }
    
`