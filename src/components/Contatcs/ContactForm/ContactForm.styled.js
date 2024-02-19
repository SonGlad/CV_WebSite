import styled from "styled-components";
import error from '../../../images/svg-icons/error.svg';
import correct from '../../../images/svg-icons/correct.svg';


export const ContactFormStyled = styled.form`
    width: 100%;
    max-width: 400px;
    
    @media screen and (min-width: 468px){
        max-width: 440px;
        padding: 20px;
        outline-offset: -1px;
        animation: BoxshadowAppear 1s 2s ease forwards,
        BoxShadowColorChange 3.2s 2.5s ease forwards;
    }

    @media screen and (min-width: 768px){
        max-width: 800px;
    }

    @keyframes BoxshadowAppear {
        0%{
            border-radius: 0px;
            box-shadow: 0px 0px 0px 0px rgba(255,255,255,0.5);
            outline: 2px solid rgba(237,237,237, 1);
        }
        100%{
            border-radius: 20px;
            box-shadow: 0px 0px 10px 10px rgba(255,255,255,0.5);
            outline: 2px solid rgba(237,237,237, 0);
        }
    }
    @keyframes BoxShadowColorChange {
        0%{
            box-shadow: 0px 0px 10px 10px rgba(255,255,255,0.5);
        }
        100%{
            box-shadow: 0px 0px 10px 10px rgba(0,0,0,0.5);
        }
    }


    .form-label{
        display: block;
        margin-bottom: 10px;
        font-weight: 400;
        font-size: 12px;
        line-height: calc(14 / 12);
        letter-spacing: 0.01em;
        transform: scale(0.5);
        opacity: 0;
        animation: OpacityAppear 1s ease forwards;
        animation-delay: calc((0.3s * var(--i) + 2.5s));

        @media screen and (min-width: 768px){
            font-weight: 500;
            font-size: 16px;
            line-height: 24px;
        }
    }

    .form-group{
        position: relative;
        margin-top: 5px;
    }

    .form-field{
        display: block;
        width: 100%;
        outline: none;
        padding: 5px 30px;
        height: 40px;
        font-family: inherit;
        font-weight: 500;
        font-size: 16px;
        line-height: calc(24 / 16);
        letter-spacing: 0.04em;
        border-radius: 10px;
        border: 2px solid ${p => p.theme.color.light_theme1};
        background-color: ${p => p.theme.color.text_color};
        color: ${p => p.theme.color.bg_color};
        transition: border ${p => p.theme.transition.main_transition};

        &::placeholder{
            color: rgba(117, 117, 117, 0.8);
            font-size: 14px;
            line-height: calc(16 / 14);
            letter-spacing: 0.04em;
        }
    }

    .form-field:hover,
    .form-field:focus,
    .form-field:focus-visible{
        border: 2px solid ${p => p.theme.color.dark_theme3};
        outline: none;
    }

    .form-icon{
        position: absolute;
        left: 8px;
        top: 50%;
        transform: translateY(-50%);
        pointer-events: none;
        fill: ${p => p.theme.color.light_theme1};
        transition: fill ${p => p.theme.transition.main_transition};
    }

    .form-field:hover + .form-icon{
        fill: ${p => p.theme.color.main_color};

    }
    .form-field:focus-within + .form-icon{
        fill: ${p => p.theme.color.main_color};

    }

    .form-comment{
        display: block;
        width: 100%;
        border-radius: 10px;
        margin-bottom: 15px;
        padding: 10px 15px;
        resize: none;
        outline: none;
        font-weight: 500;
        font-size: 16px;
        line-height: calc(20 / 16);
        border: 2px solid ${p => p.theme.color.light_theme1};
        background-color: ${p => p.theme.color.text_color};
        transition: border ${p => p.theme.transition.main_transition};
        
        &::placeholder{
            color: rgba(117, 117, 117, 0.8);
            font-size: 14px;
            line-height: calc(16 / 14);
            letter-spacing: 0.04em;
        }
    }

    .form-comment:hover,
    .form-comment:focus,
    .form-comment:focus-visible{
        border: 2px solid ${p => p.theme.color.dark_theme3};
        outline: none;
    }
    
    .form-agreement{
        display: flex;
        align-items: center;
        margin-bottom: 25px;
        gap: 10px;
        position: relative;
        animation: CheckboxSlideLeft 1s ease forwards 3.7s;
        opacity: 0;
    }

    .form-checkbox {
        width: 18px;
        height: 18px;
        outline: none;
        border: none;
        cursor: pointer;
        opacity: 0;
    }

    .custom-checkbox-before,
    .custom-checkbox-after{
        position: absolute;
        left: 0;
        top: 0;
        pointer-events: none;

        @media screen and (min-width: 768px){
            top: 3px;
        }
    }

    .custom-checkbox-before{
        opacity: 1;
        transition: opacity ${p => p.theme.transition.main_transition};
    }
    .custom-checkbox-after{
        opacity: 0;
        transition: opacity ${p => p.theme.transition.main_transition};
    }

    .form-checkbox:focus{
        border-radius: 2px;
        outline-offset: -2px; 
    }

    .form-checkbox:checked + .custom-checkbox-before{
        opacity: 0;
    }
    .form-checkbox:checked + .custom-checkbox-before + .custom-checkbox-after {
        opacity: 1;
    }


    .btn-cont{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .submit-button{
        min-width: 50%;
        padding: 14px 28px;
        border-radius: 15px;
        font-size: 16px;
        font-weight: 700;
        background-color: ${p => p.theme.color.text_color};
        color: ${p => p.theme.color.main_color};
        box-shadow: 0px 0px 10px 10px rgba(0,0,0,0.3) inset,
                    0px 0px 0px 0px rgba(0,0,0,0.3);
        transition: color ${p => p.theme.transition.main_transition}, 
                    background-color ${p => p.theme.transition.main_transition},
                    box-shadow ${p => p.theme.transition.main_transition};
        animation: ScaleAppear 1s ease forwards 3.7s;
        transform: scale(0);

        &:hover{
            background-color: ${p => p.theme.color.main_color};
            color: ${p => p.theme.color.text_color};
            box-shadow: 0px 0px 0px 0px rgba(0,0,0,0.3) inset,
                        0px 0px 10px 10px rgba(0,0,0,0.3);
        }

        @media screen and (min-width: 1200px){
            min-width: unset;
            width: 235px;
        }

        &:disabled {
            opacity: 0.5;
            pointer-events: none;
        }
    }

    @keyframes ScaleAppear {
        0%{
            transform: scale(0);
        }
        100% {
            transform: scale(1);
        }
    }

    @keyframes OpacityAppear {
        0%{
            transform: scale(0.5);
            opacity: 0;
        }
        100% {
            transform: scale(1);
            opacity: 1;
        }
    }

    @keyframes CheckboxSlideLeft {
        0%{
            transform: translateX(50%);
            opacity: 0;
        }
        100% {
            transform: translateX(0%);
            opacity: 1;
        }
    }





    /*//////////////  */
    /* VALIDATION */
    /* /////////// */
    
    .ErrorInput {
        border: 2px solid #e74a3b;
    }

    .SuccessInput {
        border: 2px solid #3cbc81;
    }

    .ImgError {
        position: absolute;
        right: 2%;
        top: 50%;
        transform: translateY(-55%);
        width: 16px;
        height: 16px;
        background-image: url(${error});
    }

    .ImgCorrect {
        position: absolute;
        right: 2%;
        top: 50%;
        transform: translateY(-55%);
        width: 16px;
        height: 16px;
        background-image: url(${correct});
    }

    .ErrorText {
        position: absolute;
        right: 1%;
        bottom: 0;
        transform: translateY(100%);
        color: #e74a3b;
        font-size: 12px;
        font-weight: 400;
        line-height: 14px;
    }

    .SuccessText {
        position: absolute;
        right: 1%;
        bottom: 0;
        transform: translateY(100%);
        color: #3cbc81;
        font-size: 12px;
        font-weight: 400;
        line-height: 14px;
    }
`