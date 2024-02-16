import styled from "styled-components";


export const ContactFormStyled = styled.form`
    width: 100%;
    max-width: 400px;


    @media screen and (min-width: 768px){
        max-width: 800px;
        border-radius: 20px;
        padding: 20px;
        /* box-shadow: 0px 0px 10px 10px rgba(0,0,2,0.5); */
        /* outline: 2px solid white; */
    }

    .form-label{
        display: block;
        margin-bottom: 10px;
        font-weight: 400;
        font-size: 12px;
        line-height: calc(14 / 12);
        letter-spacing: 0.01em;

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
    }

`