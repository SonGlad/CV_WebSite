import { styled } from "styled-components";


export const RightAnimationStyled = styled.div`
    margin: 0 auto;

    .mac-wrapper {
        width: 300px;
        height: 300px;
        margin: 0 auto;
        /* padding: 0 20px; */
    }

    .animated-svg {
        width: 300px;
        /* height: auto; */
    }


    #laptop-animation{

        * {
            transform-box: fill-box;
        }

        #CodeEditorWindow {
            transform-origin: center center;

    
            #Code {
                transform-origin: left center
            }

            #keyboard {
                fill-opacity: 0.1;
            }
        }

    }
`