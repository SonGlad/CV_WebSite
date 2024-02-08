import styled from "styled-components";


export const PortfolioStyled = styled.div`
    padding: 20px 10px 0 10px;

    @media screen and (min-width: 768px){
        padding: 30px 0 0 0;
    }

    .potfolio-title{
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


    .filter-list{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 40px;
        margin-bottom: 40px;
        flex-wrap: wrap;
    }

    .filter-button{
        font-size: 14px;
        font-weight: 500;
        padding: 10px 20px;
        border-radius: 15px;
        background-color: ${p => p.theme.color.text_color};
        color: ${p => p.theme.color.main_color};
        box-shadow: 0px 0px 10px 10px rgba(0,0,0,0.3) inset;
        transition: color ${p => p.theme.transition.main_transition}, 
                    background-color ${p => p.theme.transition.main_transition},
                    box-shadow ${p => p.theme.transition.main_transition};

        &:hover, 
        &:focus{
            background-color: ${p => p.theme.color.main_color};
            color: ${p => p.theme.color.text_color};
            box-shadow: 0px 0px 10px 10px rgba(0,0,0,0.3);
        }

        @media screen and (min-width: 768px){
            font-weight: 700;
            font-size: 16px;
            padding: 14px 28px;
        }
    }











    .cols{
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
    }

    .col{
    width: calc(25% - 2rem);
    margin: 1rem;
    cursor: pointer;
    }

    .container{
    -webkit-transform-style: preserve-3d;
            transform-style: preserve-3d;
        -webkit-perspective: 1000px;
                perspective: 1000px;
    }

    .front,
    .back{
    background-size: cover;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.25);
    border-radius: 10px;
        background-position: center;
        -webkit-transition: -webkit-transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
        transition: -webkit-transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
        -o-transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
        transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
        transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1), -webkit-transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
        -webkit-backface-visibility: hidden;
                backface-visibility: hidden;
        text-align: center;
        min-height: 280px;
        height: auto;
        border-radius: 10px;
        color: #fff;
        font-size: 1.5rem;
    }

    .back{
        background: #cedce7;
        background: -webkit-linear-gradient(45deg,  #cedce7 0%,#596a72 100%);
        background: -o-linear-gradient(45deg,  #cedce7 0%,#596a72 100%);
        background: linear-gradient(45deg,  #cedce7 0%,#596a72 100%);
    }

    .front:after{
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        width: 100%;
        height: 100%;
        content: '';
        display: block;
        opacity: .6;
        background-color: #000;
        -webkit-backface-visibility: hidden;
                backface-visibility: hidden;
        border-radius: 10px;
    }

    .container:hover .front,
    .container:hover .back{
        -webkit-transition: -webkit-transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
        transition: -webkit-transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
        -o-transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
        transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
        transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1), -webkit-transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
    }

    .back{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
    }

    .inner{
        -webkit-transform: translateY(-50%) translateZ(60px) scale(0.94);
                transform: translateY(-50%) translateZ(60px) scale(0.94);
        top: 50%;
        position: absolute;
        left: 0;
        width: 100%;
        padding: 2rem;
        -webkit-box-sizing: border-box;
                box-sizing: border-box;
        outline: 1px solid transparent;
        -webkit-perspective: inherit;
                perspective: inherit;
        z-index: 2;
    }

    .container .back{
        -webkit-transform: rotateY(180deg);
                transform: rotateY(180deg);
        -webkit-transform-style: preserve-3d;
                transform-style: preserve-3d;
    }

    .container .front{
        -webkit-transform: rotateY(0deg);
                transform: rotateY(0deg);
        -webkit-transform-style: preserve-3d;
                transform-style: preserve-3d;
    }

    .container:hover .back{
        -webkit-transform: rotateY(0deg);
                transform: rotateY(0deg);
        -webkit-transform-style: preserve-3d;
                transform-style: preserve-3d;
    }

    .container:hover .front{
        -webkit-transform: rotateY(-180deg);
                transform: rotateY(-180deg);
        -webkit-transform-style: preserve-3d;
                transform-style: preserve-3d;
    }

    .front .inner p{
        font-size: 2rem;
        margin-bottom: 2rem;
        position: relative;
    }

    .front .inner p:after{
    content: '';
        width: 4rem;
        height: 2px;
        position: absolute;
        background: #C6D4DF;
        display: block;
        left: 0;
        right: 0;
        margin: 0 auto;
        bottom: -.75rem;
    }

    .front .inner span{
        color: rgba(255,255,255,0.7);
        font-family: 'Montserrat';
        font-weight: 300;
    }

    @media screen and (max-width: 64rem){
        .col{
            width: calc(33.333333% - 2rem);
        }
    }

    @media screen and (max-width: 48rem){
        .col{
            width: calc(50% - 2rem);
        }
    }

    @media screen and (max-width: 32rem){
        .col{
            width: 100%;
            margin: 0 0 2rem 0;
        }
    }
`