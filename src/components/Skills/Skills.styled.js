import { styled } from "styled-components";


export const SkillsStyled = styled.div`
    padding: 20px 10px 0 10px;

    @media screen and (min-width: 768px){
        padding: 30px 0 0 0;
    }

    .main-education-title{
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

    .statistics-title{
        font-size: 36px;
        line-height: 120%;
        font-weight: 500;
        text-align: center;
        margin: 50px 0 20px 0;

        & span{
            color: ${p => p.theme.color.main_color};
        }

        @media screen and (min-width: 768px) {
            font-size: 46px;
            font-weight: 600;
        }
    }

    .title{
        font-size: 30px;
        line-height: 120%;
        font-weight: 500;
        text-align: center;

        & span{
            color: ${p => p.theme.color.main_color};
        }

        @media screen and (min-width: 768px) {
            font-size: 36px;
            font-weight: 600;
        }
    }

    .title-descr{
        margin: 10px 0;
        font-size: 20px;
        line-height: 120%;
        font-weight: 400;
        text-align: center;

        & span{
            color: ${p => p.theme.color.main_color};
        }

        @media screen and (min-width: 780px) {
            margin: 15px 0 40px 0;
            font-size: 26px;
            font-weight: 500;
        }
    }

`