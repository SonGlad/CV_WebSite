import styled from "styled-components";


export const DescriptionStyled = styled.div`
    width: 100%;
    height: auto;
    padding: 20px 0px;

    @media screen and (min-width: 1000px){
        flex-grow: 1;
        height: 100%;
        padding: 20px 10px 10px 10px;
    }


    .repository-link{
        display: flex;
        align-items: center;
        gap: 5px;
        color: ${p => p.theme.color.main_color_blue};
        fill: ${p => p.theme.color.main_color_blue};
        transition: color ${p => p.theme.transition.main_transition},
                    fill ${p => p.theme.transition.main_transition};

        &:hover{
            color: ${p => p.theme.color.main_color};
            fill: ${p => p.theme.color.main_color};
        }
    }

    .svg-link{
        width: 14px;
        height: 14px;

        @media screen and (min-width: 550px){
            width: 18px;
            height: 18px;
        }
        @media screen and (min-width: 1000px){
            width: 14px;
            height: 14px;
        }
        @media screen and (min-width: 1440px){
            width: 18px;
            height: 18px;
        }
    }
`