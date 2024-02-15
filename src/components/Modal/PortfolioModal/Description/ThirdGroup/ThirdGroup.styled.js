import styled from "styled-components";


export const ThirdGroupStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    column-gap: 20px;
    font-weight: 400;
    font-size: 14px;
    line-height: calc(24/16);
    margin-bottom: 10px;

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


    .collaborators-text{
        padding: 5px 0;
    }

    .collaborators-div{
        flex: 1;
        min-width: 65%;
        height: 28px;
        position: relative;
        border-radius: 10px;
        display: flex;
        align-items: center;
        

        @media screen and (min-width: 550px){
            height: 37px;
        }
        @media screen and (min-width: 1000px){
            height: 28px;
        }
        @media screen and (min-width: 1440px){
            height: 37px;
        }
    }

    .collaborators-list{
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 15px;
        backdrop-filter: blur(8px);
        padding: 5px 10px 10px 10px;
        border: none;
        outline: none;
        border-radius: 10px;
        height: 28px;
        overflow: hidden;
    

        @media screen and (min-width: 550px){
            height: 37px;
        }
        @media screen and (min-width: 1000px){
            height: 28px;
        }
        @media screen and (min-width: 1440px){
            height: 37px;
        }
    }

    .drop-btn{
        margin-top: 0px;
        font-size: 14px;
        font-weight: 400;
        padding: 3px 10px;
        border-radius: 10px;
        background-color: ${p => p.theme.color.text_color};
        color: ${p => p.theme.color.black};
        box-shadow: 0px 0px 5px 5px rgba(0,0,0,0.3) inset,
                    0px 0px 0px 0px rgba(0,0,0,0.3);
        transition: color ${p => p.theme.transition.main_transition}, 
                    background-color ${p => p.theme.transition.main_transition},
                    box-shadow ${p => p.theme.transition.main_transition},
                    transform ${p => p.theme.transition.main_transition};

        &:hover{
            background-color: ${p => p.theme.color.main_color};
            color: ${p => p.theme.color.text_color};
            box-shadow: 0px 0px 0px 0px rgba(0,0,0,0.3) inset,
                        0px 0px 5px 5px rgba(0,0,0,0.3);
        }

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

    .active{
        transform: translateX(-10px);
        background-color: ${p => p.theme.color.main_color};
        color: ${p => p.theme.color.text_color};
        box-shadow: 0px 0px 0px 0px rgba(0,0,0,0.3) inset,
                    0px 0px 5px 5px rgba(0,0,0,0.3);
    }


    .list-1{
        z-index: 3;
        background-color: rgba(0, 0, 0, 0.4);
        height: fit-content;
    }
    .list-2{
        z-index: 2;
        background-color: rgba(0, 0, 0, 0.4);
        height: fit-content;
    }
    .list-3{
        z-index: 1;
        background-color: rgba(0, 0, 0, 0.4);
        height: fit-content;
    }
`