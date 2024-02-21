import { styled } from "styled-components";


export const FooterStyled = styled.footer`
    padding-bottom: 3px;
    /* overflow: hidden; */
    
    .footer-container{
        padding: 40px 0;
        

        @media screen and (min-width: 768px){
            padding: 40px 0 40px 0;
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 30px;
        }
        @media screen and (min-width: 981px) {
            padding: 40px 0 20px 0;
        }
    }

    .hidden .footer-left-cont,
    .hidden .footer-center-cont,
    .hidden .footer-right-cont{
        animation: none;
    }
    

    .visible .footer-left-cont{
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 20px;
        margin-right: 30px;
        opacity: 0;
        animation: slideLeft 1s ease forwards;

        
        @media screen and (min-width: 768px){
            margin-bottom: 0;
            animation: slideTopRight 1s ease forwards;
        }
        @media screen and (min-width: 981px){
            margin-right: 0;
        }         
    }

    @keyframes slideLeft {
       0%{
        opacity: 0;
        transform: translateX(100px);
       }
       100%{
        opacity: 1;
        transform: translateX(0px);
       } 
    }
    @keyframes slideTopRight {
       0%{
        opacity: 0;
        transform: translate(-50px, 20px);
       }
       100%{
        opacity: 1;
        transform: translate(0, 0);
       } 
    }


    @media screen and (min-width: 768px){
       .order-one{
        order:1;
       }
       .order-two{
        order:3;
       }
       .order-three{
        order:2;
       }
    }
    
    @media screen and (min-width: 981px){
       .order-one{
        order:1;
       }
       .order-two{
        order:2;
       }
       .order-three{
        order:3;
       }
    } 

    .footer-text-center,
    .footer-text-right{
        text-align: center;
        font-weight: 400;
        font-size: 16px;
        line-height: calc(24/16);
    }

    .footer-text-right span{
        color: ${p => p.theme.color.main_color};
    }

    .footer-link{
        display: flex;
        align-items: center;
        gap: 5px;
        font-weight: 600;
        color: ${p => p.theme.color.main_color};
        fill: ${p => p.theme.color.text_color};
        transition: color ${p => p.theme.transition.main_transition},
                    fill ${p => p.theme.transition.main_transition};

        &:hover,
        &:focus{
            color: ${p => p.theme.color.text_color};
            fill: ${p => p.theme.color.main_color};
        }
    }

    .visible .footer-center-cont{
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        opacity: 0;
        animation: slideRight 1s ease forwards;
        
        & span{
            color: ${p => p.theme.color.main_color};
            font-weight: 600;
        }
        
        @media screen and (min-width: 768px){
            margin-bottom: 0;
            margin-left: auto;
            margin-right: auto;
            animation: slideTop 1s ease forwards;
        }
    }


    @keyframes slideRight {
       0%{
        opacity: 0;
        transform: translateX(-100px);
       }
       100%{
        opacity: 1;
        transform: translateX(0px);
       } 
    }
    @keyframes slideTop {
       0%{
        opacity: 0;
        transform: translate(0px, 30px);
        scale: 0.7;
       }
       100%{
        opacity: 1;
        transform: translate(0, 0);
        scale: 1;
       } 
    }
    

    .cont-for-foo-pic{
        position: relative;
        overflow: visible;
        cursor: pointer;
        width: 50px;
        height: 50px;
        margin-left: 5px;
        transition: scale ${p => p.theme.transition.main_transition};
    }

    .footer-img{
        position: absolute;
        z-index: 10;
        width: 100px;
        height: auto;
        top: 50%;
        left: 50%;
        transform: translate(-36%, -50%) scale(1.3);
        transition: transform ${p => p.theme.transition.main_transition};
    }

    .img-active{
        top: 0%;
        left: 0%;
        transform: translate(-50%, -350%) scale(5);

        @media screen and (min-width: 400px){
            transform: translate(30%, -400%) scale(6);
        }
        @media screen and (min-width: 500px){
            transform: translate(140%, -400%) scale(7);
        }
        @media screen and (min-width: 634px){
            transform: translate(250%, -400%) scale(8);
        }
        @media screen and (min-width: 768px){
            transform: translate(-150%, -450%) scale(9);
        }
    }

    .visible .footer-right-cont{
        display: flex;
        align-items: center;
        gap: 20px;
        opacity: 0;
        animation: slideContLeft 1s ease forwards;

        @media screen and (min-width: 768px){
            animation: slideTopLeft 1s ease forwards;
        }
    }


    @keyframes slideContLeft {
       0%{
        opacity: 0;
        transform: translateX(100px);
       }
       100%{
        opacity: 1;
        transform: translateX(0px);
       } 
    }
    @keyframes slideTopLeft {
       0%{
        opacity: 0;
        transform: translate(50px, 20px);
       }
       100%{
        opacity: 1;
        transform: translate(0, 0);
       } 
    }


    .footer-social-list{
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .footer-social-link{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        box-shadow: 0px 0px 5px 5px rgba(255, 255, 255, 0.12),
        0px 0px 5px 5px rgba(0, 0, 0, 0.12) inset;
        background-color: ${p => p.theme.color.text_color};
        fill: ${p => p.theme.color.main_color};
        transition: background-color ${p => p.theme.transition.main_transition},
                    fill ${p => p.theme.transition.main_transition},
                    box-shadow ${p => p.theme.transition.main_transition};
        
        &:hover,
        &:focus{
            background-color: ${p => p.theme.color.main_color};
            fill: ${p => p.theme.color.text_color};
            box-shadow: 0px 0px 5px 5px rgba(204, 57, 0, 0.12),
            0px 0px 5px 5px rgba(0, 0, 0, 0.12) inset;
        }
    }

`