import { styled } from "styled-components";


export const RightAnimationStyled = styled.div`
    margin: 0 auto;

    .mac-wrapper {
        width: 300px;
        height: 300px;
        margin: 0 auto;
    }

    .animated-svg {
        width: 300px;
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