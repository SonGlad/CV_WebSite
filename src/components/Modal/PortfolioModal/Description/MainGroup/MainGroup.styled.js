import styled from "styled-components";
import backgroundtextImage from '../../../../../images/images/animated-text-fill.png';



export const MainGroupStyled = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    column-gap: 20px;

    
    @media screen and (min-width: 420px){
        justify-content: space-between;
    }


    .main-group-item{
        min-width: 45%;
        margin-bottom: 20px;
        font-weight: 400;
        font-size: 18px;

        @media screen and (min-width: 550px){
            font-weight: 500;
            font-size: 24px;
        }
    }

    

    .class-for-animation{
        max-width: 252px;
        color: ${p => p.theme.color.text_color};
        background: url(${backgroundtextImage}) repeat-y;
        -webkit-background-clip: text;
        background-clip: text;

        -webkit-text-fill-color: transparent;
        animation: modalRolling 160s linear infinite;
        transform: translate3d(0,0,0);
        backface-visibility: hidden;

        -webkit-animation: modalRolling 160s linear infinite;
        -webkit-transform: translate3d(0,0,0);
        -webkit-backface-visibility: hidden;
    }

    @keyframes modalRolling {
        0% { background-position: 0% 50%; }
        100% { background-position: 100% 50%; }
    }
    @-webkit-keyframes modalRolling {
        0% { background-position: 0% 50%; }
        100% { background-position: 100% 50%; }
    } 
`