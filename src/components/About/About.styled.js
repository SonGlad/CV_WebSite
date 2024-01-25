import { styled } from "styled-components";


export const AboutStyled = styled.div`
    padding: 20px 0;

    @media screen and (min-width: 768px){
        padding: 30px 0;
    }

    .about-title{
        font-size: 56px;
        line-height: 120%;
        font-weight: 700;
        text-align: center;
        margin-bottom: 20px;

        & span{
            color: ${p => p.theme.color.main_color};
        }
    }

    .about-cont,
    .coding-container-right{
        margin-bottom: 30px;

        @media screen and (min-width: 768px){
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }

    .coding-container-left{
        margin-bottom: 30px;

        @media screen and (min-width: 768px){
            display: flex;
            align-items: center;
            justify-content: center;

            .order-one{
                order:2;
            }
            .order-two{
                order:1;
            }
        }
    }

    .animation-container{
        margin-bottom: 30px;
        @media screen and (min-width: 768px){
            margin-bottom: 50px;
        }
    }
 
    .about-img-cont{
        margin: 0 auto;
        margin-bottom: 20px;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 300px;
        height: 300px;
        border-radius: 50%;

        @media screen and (min-width: 768px){
            margin-bottom: 0;
        }
    }

    .circle-filter{
        position: absolute;
        background-color: ${p => p.theme.color.bg_color};
        z-index: 2;
        border-radius: 50%;
        width: 96%;
        height: 96%;
    }
    
    .about-img{
        position: absolute;
        z-index: 3;
        border: 2px solid ${p => p.theme.color.main_color};
        border-radius: 50%;
        width: 90%;
    }
    
    .circle-spin1{
        position: absolute;
        top: 0%;
        left: 0%;
        transform: rotate(0);
        border-radius: 150px 0px 0;
        width: 0;
        height: 0;
        border-top: 150px solid ${p => p.theme.color.main_color};
        border-right: 150px solid transparent;
        /* -webkit-box-shadow: -2px -2px 10px 2px rgba(204, 57, 0, 0.6);;
        -moz-box-shadow: -2px -2px 10px 2px rgba(204, 57, 0, 0.6);;
        box-shadow: -2px -2px 10px 2px rgba(204, 57, 0, 0.6);; */
        animation: circleSpinner1 8s linear infinite;
    }

    .circle-spin2{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: rotate(0);
        border-radius: 0 0 150px;
        width: 0;
        height: 0;
        border-bottom: 150px solid ${p => p.theme.color.main_color};
        border-left: 150px solid transparent;
        /* -webkit-box-shadow: 2px 2px 10px 2px rgba(204, 57, 0, 0.6);;
        -moz-box-shadow: 2px 2px 10px 2px rgba(204, 57, 0, 0.6);;
        box-shadow: 2px 2px 10px 2px rgba(204, 57, 0, 0.6);; */
        animation: circleSpinner2 8s linear infinite;
    }

    @keyframes circleSpinner1 {
        0% {
            -webkit-transform: rotate(0);
                    transform: rotate(0);
            -webkit-transform-origin: bottom right;
                    transform-origin: bottom right;
        }
        100% {
            -webkit-transform: rotate(360deg);
                    transform: rotate(360deg);
            -webkit-transform-origin: bottom right;
                    transform-origin: bottom right;
        }
    }
    
    @keyframes circleSpinner2 {
        0% {
            -webkit-transform: rotate(0);
                    transform: rotate(0);
            -webkit-transform-origin: top left;
                    transform-origin: top left;
        }
        100% {
            -webkit-transform: rotate(360deg);
                    transform: rotate(360deg);
            -webkit-transform-origin: top left;
                    transform-origin: top left;
        }
    }


    .about-content-text{
        font-size: 16px;
        line-height: 24px;
        text-indent: 20px;
        text-align: justify;

        &::first-letter {
            font-size: 32px;
            color: ${p => p.theme.color.main_color};
        }

        @media screen and (min-width: 768px){
            max-width: 50%;
        }
    }

    .github-data{
        @media screen and (min-width: 1230px    ){
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }

    
    ::-webkit-scrollbar {
        height: 8px;
        border-radius: 5px;
        background-color: ${p => p.theme.color.light_theme1};
    }
    ::-webkit-scrollbar-thumb {
        border-radius: 4px;
        background-color: ${p => p.theme.color.light_theme5};
    }

    
    .github-title{
        text-align: center;
        font-size: 56px;
        line-height: 120%;
        font-weight: 700;
        margin-bottom: 30px;
        & span{
            color: ${p => p.theme.color.main_color};
        }
    }

    .tool-tip{
        color: ${p => p.theme.color.main_color};
    }
`