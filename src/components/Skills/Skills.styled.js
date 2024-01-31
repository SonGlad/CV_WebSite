import { styled } from "styled-components";


export const SkillsStyled = styled.div`
    padding: 20px 0;

    @media screen and (min-width: 768px){
        padding: 30px 0;
    }

    .education-title{
        font-size: 46px;
        line-height: 120%;
        font-weight: 600;
        text-align: center;
        margin-bottom: 40px;

        & span{
            color: ${p => p.theme.color.main_color};
        }

        @media screen and (min-width: 768px) {
            font-size: 56px;
            font-weight: 700;
        }
    }
`