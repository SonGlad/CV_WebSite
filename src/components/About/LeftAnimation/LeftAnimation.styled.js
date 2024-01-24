import { styled } from "styled-components";


export const LeftAnimationStyled = styled.div`
    margin: 0 auto;
    width: 300px;
    height: 300px;
    
    svg {
        height: 300px;
        width: 300px;
    }

    #webdev-animation {
        
        * {
            transform-box: fill-box;
        }
    
        #in-browser {
            opacity: 0;
            transform-origin: center bottom;
        
            #hero, #Logo, #menu, #h1 {
            opacity: 0;
            transform-origin: left top;
            }
            
            #body_text * {
            opacity: 0;
            transform-origin: left top;
            }
            
            #image {
            opacity: 0;
            transform-origin: center center;
            }
        }
    
        #Code * {
            transform-origin: left center; 
        }
    }
`