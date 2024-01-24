import { styled } from "styled-components";


export const RightAnimationStyled = styled.div`
    /* $codeLines: 26;

    .mac-wrapper {
        width: 100%;
        max-width: 500px;
        padding: 0 20px;
    }

    .animated-svg {
        height: auto;

        #CodeEditorWindow {
            display: none;
        }
    }

    .start {
        #CodeEditorWindow {
            display: block;
            animation: .5s ease-out 0s 1 normal forwards appOpen,
                .5s ease-out #{$codeLines + 1}s 1 reverse forwards appOpen;
            transform-origin: center center;
        }

        [id^="codeline"] {
            clip-path: polygon(0 0, 0 100%, 0 100%, 0 0);
            animation: writeLine 1s linear forwards;
        }

        @for $i from 1 through $codeLines {
            #codeline#{$i} {
                animation-delay: #{$i}s;
            }
        }

        @for $j from 1 to 19 {
            #keyboard#{random(49)} {
                animation-name: keydown;
                animation-duration: 1s;
                animation-delay: #{1000 + random(1000)}ms;
                animation-iteration-count: $codeLines;
            }
        }

        #keyboard-return {
            animation-name: keydown;
            animation-duration: 1s;
            animation-delay: 2s;
            animation-iteration-count: $codeLines;
        }

        @keyframes writeLine {
            0% {
                clip-path: polygon(0 0, 0 100%, 0 100%, 0 0);
            }
            100% {
                clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 0);
            }
        }

        @keyframes keydown {
            0% {
                fill-opacity: 0.1;
            }
            15% {
                fill-opacity: .3;
            }
            30% {
                fill-opacity: 0.1;
            }
        }

        @keyframes appOpen {
            0% {
                opacity: 0;
                transform: scale(0.3);
            }
            30% {
                opacity: 1;
            }
            100% {
                opacity: 1;
                transform: scale(1);
            }
        }
    } */
`