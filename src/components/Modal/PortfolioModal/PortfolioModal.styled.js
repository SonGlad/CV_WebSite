import styled from "styled-components";


export const PortfolioModalStyled = styled.div`
    width: 90%;
    height: 80%;
    background-color: ${p => p.theme.color.second_bg_color};
    position: relative;
    border-radius: 10px;
    padding: 30px 0px 30px 26px;
    overflow: auto;

    @media screen and (min-width: 768px){
        width: 80%;
    }
    @media screen and (min-width: 1200px){
        padding: 40px;
        padding-right: 16px;
        max-width: 1930px;
        max-height: 900px;
    }


    .border-div{
        width: 100%;
        height: 100%;
        overflow: auto;
        padding-right: 13px;
        border-right: 13px solid transparent;

        &::-webkit-scrollbar {
            width: 3px;
            background-color: transparent;
        }
        &::-webkit-scrollbar-thumb {
            border-radius: 5px;
            background-color: ${p => p.theme.color.main_color};
            border-radius: 50%;
        }
    }


    .close-btn{
        position: absolute;
        z-index: 20;
        top: 5px;
        right: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5px;
        background-color: ${p => p.theme.color.text_color};
        border-radius: 50%;
        box-shadow: 0px 0px 10px 10px rgba(0,0,0,0.3) inset,
                    0px 0px 0px 0px rgba(0,0,0,0.3);
        transition: transform ${p => p.theme.transition.main_transition},
        background-color ${p => p.theme.transition.main_transition},
        box-shadow ${p => p.theme.transition.main_transition};

        &:hover, 
        &:focus{
            transform: rotate(90deg);
            background-color: ${p => p.theme.color.main_color};
            box-shadow: 0px 0px 0px 0px rgba(0,0,0,0.3) inset,
                        0px 0px 10px 10px rgba(0,0,0,0.3);
        }

        @media screen and (min-width: 1200px){
            top: 15px;
            right: 15px;
        }
    }


    .icon{
        width: 12px;
        height: 12px;
        fill: ${p => p.theme.color.black};
        transition: all ${p => p.theme.transition.main_transition};
        
        @media screen and (min-width: 1200px){
            width: 20px;
            height: 20px;
        }
    }

    .close-btn .icon:hover,
    .close-btn .icon:focus{
        fill: ${p => p.theme.color.text_color};
    }


    .content-cont{
        width: 100%;

        @media screen and (min-width: 1000px){
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }

    .description-cont{
        width: 100%;
        text-align: justify;
        text-indent: 20px;
        font-weight: 400;
        font-size: 14px;
        line-height: calc(24/16);

        @media screen and (min-width: 550px){
            font-weight: 500;
            font-size: 18px;
        }
        @media screen and (min-width: 1000px){
            font-weight: 400;
            font-size: 14px;
        }
        @media screen and (min-width: 1440px){
            font-weight: 500;
            font-size: 18px;
        }
    }
`