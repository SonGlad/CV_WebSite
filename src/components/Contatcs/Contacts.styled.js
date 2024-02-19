import styled from "styled-components";


export const ContactsStyled = styled.div`
    padding: 20px 0;

    @media screen and (min-width: 768px){
        padding: 30px 0 10px 0;
    }

    .about-title{
        font-size: 56px;
        line-height: 120%;
        font-weight: 700;
        text-align: center;

        & span{
            color: ${p => p.theme.color.main_color};
        }
    }

    .content-container{
        @media screen and (min-width: 768px){
            display: flex;
            column-gap: 20px;
        }
    }

    .form-container{
        width: 100%;
        padding: 50px 20px 0 20px;
        display: flex;
        justify-content: center;

        @media screen and (min-width: 768px){
            padding: 50px 40px 20px 40px;
            width: 50%;
        }
    }
    
    
    .animated-span-upper,
    .animated-span-lower{
        display: flex;
        justify-content: center;
        width: 100%;
        max-width: 400px;
        height: auto;
        border: none;
        outline: none;
        position: relative;

        @media screen and (min-width: 468px){
            max-width: 440px;
        }

        @media screen and (min-width: 768px){
            max-width: 800px;
        }
    }

    .animated-span-upper::before{
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        width: 2px;
        height: 0;
        background-color: ${p => p.theme.color.text_color};
        animation: HeightAppear 2s ease forwards, 
                OpacityDisappear 0.5s ease forwards 2s;
    }
    .animated-span-upper::after{
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        width: 0;
        height: 2px;
        background-color: ${p => p.theme.color.text_color};
        animation: WidthAppear 2s ease forwards,
                OpacityDisappear 0.5s ease forwards 2s;
    }
    .animated-span-lower::before{
        position: absolute;
        content: '';
        top: 0;
        right: 0;
        width: 2px;
        height: 0;
        background-color: ${p => p.theme.color.text_color};
        animation: HeightAppearBottom 1s 1s ease forwards,
                OpacityDisappear 0.5s ease forwards 2s;
    }
    .animated-span-lower::after{
        position: absolute;
        content: '';
        bottom: 0;
        left: 0;
        width: 0;
        height: 2px;
        background-color: ${p => p.theme.color.text_color};
        animation: WidthAppearBottom 1s 1s ease forwards,
                OpacityDisappear 0.5s ease forwards 2s;
    }

    @keyframes HeightAppear  {
        0%{
            height: 0%;
        }
        50%{
            height:100%;
        }
        100%{
            height:100%;
        }
    }
    @keyframes WidthAppear  {
        0%{
            width: 0%;
        }
        50%{
            width:100%;
        }
        100%{
            width:100%;
        }
    }
    @keyframes WidthAppearBottom  {
        0%{
            width: 0%;
        }
        100%{
            width:100%;
        }
    }
    @keyframes HeightAppearBottom  {
        0%{
            height: 0%;
        }
        100%{
            height:100%;
        }
    }
    @keyframes OpacityDisappear {
        0%{
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }

`