import styled from "styled-components";


export const PortfolioStyled = styled.div`
    padding: 20px 10px 10px 10px;

    @media screen and (min-width: 768px){
        padding: 30px 0 10px 0;
    }

    .potfolio-title{
        font-size: 46px;
        line-height: 120%;
        font-weight: 600;
        text-align: center;
        margin-bottom: 20px;

        & span{
            color: ${p => p.theme.color.main_color};
        }

        @media screen and (min-width: 768px) {
            font-size: 56px;
            font-weight: 700;
        }
    }


    .filter-list{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 40px;
        margin-bottom: 20px;
        flex-wrap: wrap;
    }

    .filter-button{
        font-size: 14px;
        font-weight: 500;
        padding: 10px 20px;
        border-radius: 15px;
        background-color: ${p => p.theme.color.text_color};
        color: ${p => p.theme.color.black};
        box-shadow: 0px 0px 10px 10px rgba(0,0,0,0.3) inset,
                    0px 0px 0px 0px rgba(0,0,0,0.3);
        transition: color ${p => p.theme.transition.main_transition}, 
                    background-color ${p => p.theme.transition.main_transition},
                    box-shadow ${p => p.theme.transition.main_transition};

        &:hover, 
        &:focus{
            background-color: ${p => p.theme.color.main_color};
            color: ${p => p.theme.color.text_color};
            box-shadow: 0px 0px 0px 0px rgba(0,0,0,0.3) inset,
                        0px 0px 10px 10px rgba(0,0,0,0.3);
        }

        @media screen and (min-width: 768px){
            font-weight: 700;
            font-size: 16px;
            padding: 14px 28px;
        }
    }

    .cols {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 32px;

        @media screen and (min-width: 480px){
            gap: 17px;
        }
        @media screen and (min-width: 900px){
            gap: 29px;
        }
        @media screen and (min-width: 1440px){
            gap: 36px;
        }
    }

    .col {
        width: 100%;
        
        @media screen and (min-width: 480px){
            max-width: 48%;
        }
        @media screen and (min-width: 900px){
            max-width: 31%;
        }
        @media screen and (min-width: 1440px){
            max-width: 25%;
            max-height: 280px;
        }
    }

    .container {
        transform-style: preserve-3d;
        perspective: 1000px;
    }

    .front,
    .back {
        background-size: cover;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.25);
        background-position: center;
        text-align: center;
        min-height: 260px;
        height: auto;
        border-radius: 10px;
        color: ${p => p.theme.color.text_color};
        font-size: 24px;
        backface-visibility: hidden;
        transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
    }

    .back{
        background: #cedce7;
        background: linear-gradient(45deg,  #cedce7 0%, #596a72 100%);
    }

    .front:after{
        display: block;
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        z-index: 1;
        width: 100%;
        height: 100%;
        opacity: 0.6;
        background-color: ${p => p.theme.color.black};
        backface-visibility: hidden;
        border-radius: 10px;
    }

    .container:hover .front,
    .container:hover .back{
        transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
    }

    .back{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
    }

    .inner{
        transform: translateY(-50%) translateZ(60px) scale(0.94);
        top: 50%;
        position: absolute;
        left: 0;
        width: 100%;
        padding: 32px;
        box-sizing: border-box;
        outline: 1px solid transparent;
        perspective: inherit;
        z-index: 2;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .container .back{
        transform: rotateY(180deg);
        transform-style: preserve-3d;
    }

    .container .front{
        transform: rotateY(0deg);
        transform-style: preserve-3d;
    }

    .container:hover .back{
        transform: rotateY(0deg);
        transform-style: preserve-3d;
    }

    .container:hover .front{
        transform: rotateY(-180deg);
        transform-style: preserve-3d;
    }

    .front .inner p{
        position: relative;
        font-size: 32px;
        margin-bottom: 32px;
    }

    .front .inner p:after{
        display: block;
        position: absolute;
        content: '';
        width: 64px;
        height: 2px;
        background: #C6D4DF;
        left: 0;
        right: 0;
        margin: 0 auto;
        bottom: -12px;
    }

    .front .inner span{
        color: rgba(204,57,0,0.8);
        font-family: 'Montserrat';
        font-weight: 300;
    }

    .back .inner p{
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        margin-bottom: 20px;
        font-size: 20px;
        font-weight: 400;

        @media screen and (min-width: 768){
            font-size: 24px;
            font-weight: 500;
        }
    }

    .open-button{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        font-size: 14px;
        font-weight: 500;
        padding: 10px 20px;
        background-color: transparent;
        color: ${p => p.theme.color.black};
        box-shadow: 0px 0px 10px 10px rgba(0,0,0,0.3) inset,
                    0px 0px 0px 0px rgba(0,0,0,0.3);
        border-radius: 15px;
        stroke: ${p => p.theme.color.main_color};
        transition: color ${p => p.theme.transition.main_transition}, 
                    background-color ${p => p.theme.transition.main_transition},
                    box-shadow ${p => p.theme.transition.main_transition},
                    stroke ${p => p.theme.transition.main_transition};
        @media screen  and (min-width: 768px){
            font-weight: 700;
            font-size: 16px;
            padding: 14px 28px;
        }

        &:hover, 
        &:focus{
            background-color: ${p => p.theme.color.main_color};
            color: ${p => p.theme.color.text_color};
            box-shadow: 0px 0px 0px 0px rgba(0,0,0,0.3) inset,
                        0px 0px 10px 10px rgba(0,0,0,0.3);
                        
            stroke: ${p => p.theme.color.text_color};
        }
    }

`