import styled from "styled-components";


export const ContactModalStyled = styled.div`
    width: 80%;
    background-color: ${p => p.theme.color.second_bg_color};
    position: relative;
    border-radius: 20px;
    padding: 30px 10px 30px 10px;
    overflow: auto;


    @media screen and (min-width: 768px){
        width: 615px;
        padding: 24px 5px 24px 5px;
    }

    @media screen and (min-width: 1200px){
        width: 730px;
        padding: 45px;
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


    .content-container{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .shadow-div{
        box-shadow: 0px 0px 10px 10px rgba(0,0,2,0.5);
        padding: 12px 5px 12px 5px;
        border-radius: 10px;

        @media screen and (min-width: 768px){
            padding: 18px 5px 18px 5px;
            border-radius: 20px;
        }

        @media screen and (min-width: 1200px){
            padding: 24px;
        }
    }

    .content{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 15px;
        margin-bottom: 15px;

        @media screen and (min-width: 768px){
            margin-bottom: 25px;
        }
        @media screen and (min-width: 1200px){
            margin-bottom: 45px;
        }
    }

    .modal-icon{
        width: 24px;
        height: 24px;
    }

    .contact-modal-text{
        text-align: center;
        font-weight: 400;
        font-size: 16px;
        line-height: calc(24 / 16);
        letter-spacing: 0.04em;

        @media screen and (min-width: 768px){
            font-weight: 600;
            font-size: 24px;
            line-height: calc(24 / 16);
        }
        
        @media screen and (min-width: 1200px){
            font-weight: 700;
            font-size: 28px;
            line-height: calc(24 / 16);
        }
    }
    .sucsess{
        color: ${p => p.theme.color.green};
        text-shadow: 3px -3px 3px ${p => p.theme.color.black};
    }
    .error{
        color: ${p => p.theme.color.red};
        text-shadow: 3px -3px 3px ${p => p.theme.color.black};
    }


    .continue-btn{
        width: 50%;
        max-width: 200px;
        padding: 5px 10px;
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
        margin-top: 30px;

        &:hover{
            background-color: ${p => p.theme.color.main_color};
            color: ${p => p.theme.color.text_color};
            box-shadow: 0px 0px 0px 0px rgba(0,0,0,0.3) inset,
                        0px 0px 10px 10px rgba(0,0,0,0.3);
        }

        @media screen and (min-width: 768px){
            padding: 10px 15px;  
            margin-top: 40px;
        }
        @media screen and (min-width: 1200px){
            padding: 14px 28px;
            margin-top: 45px;           
        }
    }

`