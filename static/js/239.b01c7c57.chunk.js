"use strict";(self.webpackChunkcv_website=self.webpackChunkcv_website||[]).push([[239],{9677:(n,e,t)=>{t.d(e,{$:()=>s});var i,r=t(168);const o=t(2978).zo.section(i||(i=(0,r.Z)(["\n\t/* min-height: 100vh;\n    display: flex;\n    align-items: center;\n\tflex-direction: column;\n    font-size: 40px;\n\tfont-family: 'Open Sans', sans-serif;\n    color: #fff; */\n"])));var a=t(184);const s=n=>{let{children:e}=n;return(0,a.jsx)(o,{children:e})}},3485:(n,e,t)=>{t.r(e),t.d(e,{default:()=>k});var i=t(9677),r=t(3623),o=t(168),a=t(2978);const s=t.p+"static/media/my_photo_1.bead1d4cd45f6e8be19d.jpg";var c;const l=a.zo.div(c||(c=(0,o.Z)(["\n    display: flex;\n    flex-direction: column;\n    min-height: 80vh;\n\n    .order-one{\n        order: 2;\n    }\n    .order-two{\n        order: 1;\n    }\n\n    @media screen and (min-width: 768px){\n        flex-direction: row;\n\n        .order-one{\n            order: 1;\n        }\n        .order-two{\n            order: 2;\n        }\n    }\n\n    .left-container{\n        width: 100%;\n        padding: 50px 0;\n        overflow: hidden;\n\n        @media screen and (min-width: 768px){\n            padding: 50px 0 25px 0;\n            max-width: 50%;\n        }\n    }\n\n    .title{\n        font-size: 56px;\n        line-height: 120%;\n        font-weight: 700;\n        text-align: center;\n        animation: titleSlideDown 1s ease forwards;\n        opacity: 0;\n\n        @media screen and (min-width: 768px){\n            text-align: start;\n        }\n    }\n\n    @keyframes titleSlideDown {\n        0%{\n            opacity: 0;\n            transform: translateY(-100%);\n        }\n        100%{\n            opacity: 1;\n            transform: translateY(0px);\n        }\n    }   \n\n\n    .title-animated{\n        font-size: 44px;\n        font-weight: 700;\n        margin: 30px 0;\n        color: ",";\n        text-shadow: 0px 0px 40px ",";\n        text-align: center;\n        height: 112px;\n        animation: titleSlideRight 1s ease forwards;\n        opacity: 0;\n\n        @media screen and (min-width: 525px){\n            height: auto;\n        }\n\n        @media screen and (min-width: 768px){\n            text-align: start;\n            font-size: 30px;\n            font-weight: 600;\n        }\n        @media screen and (min-width: 910px){\n            font-size: 37px;\n            font-weight: 600;\n        }\n        @media screen and (min-width: 1050px){\n            font-size: 44px;\n            font-weight: 700;\n        }\n    }\n\n    @keyframes titleSlideRight {\n        0%{\n            opacity: 0;\n            transform: translateX(-100%);\n        }\n        100%{\n            opacity: 1;\n            transform: translateX(0px);\n        }\n    }  \n\n\n    .Typewriter__cursor{\n        font-size: 44px;\n        font-weight: 300;\n        color: ",";\n    }\n\n    .text-description{\n        font-size: 16px;\n        line-height: 24px;\n        text-indent: 20px;\n        text-align: justify;\n\n        &::first-letter {\n            font-size: 32px;\n            color: ",";\n        }\n    }\n\n    .upper-text{\n        margin-bottom: 15px;\n        animation: upperTextSlideTop 1s ease forwards;\n        opacity: 0;\n    }\n\n    @keyframes upperTextSlideTop {\n        0%{\n            opacity: 0;\n            transform: translateY(100%);\n        }\n        100%{\n            opacity: 1;\n            transform: translateY(0);\n        }\n    }\n\n    .lower-text{\n        margin-bottom: 60px;\n        animation: lowerTextSlideLeft 1s 0.2s ease forwards;\n        opacity: 0;\n    }\n\n    @keyframes lowerTextSlideLeft {\n        0%{\n            opacity: 0;\n            transform: translateX(50%);\n        }\n        100%{\n            opacity: 1;\n            transform: translateX(0);\n        }\n    }\n\n    .btn-cont{\n        min-height: 54px;\n        display: flex;\n        align-items: center;\n        flex-wrap: wrap;\n        gap: 40px;\n        justify-content: space-around;\n\n        @media screen and (max-width: 767px){\n            width: 100%;\n            display: flex; \n        }\n    }\n\n    .redirect-link{ \n        padding: 14px 28px;\n        border-radius: 15px;\n        font-size: 16px;\n        font-weight: 700;\n        background-color: ",";\n        color: ",";\n        box-shadow: 0px 0px 10px 10px rgba(0,0,0,0.3) inset,\n                    0px 0px 0px 0px rgba(0,0,0,0.3);\n        transition: color ",",\n                    fill ",", \n                    background-color ",",\n                    box-shadow ",";\n\n        &:hover{\n            background-color: ",";\n            color: ",";\n            fill: ",";\n            box-shadow: 0px 0px 0px 0px rgba(0,0,0,0.3) inset,\n                        0px 0px 10px 10px rgba(0,0,0,0.3);\n        }\n\n        @media screen and (max-width: 767px){\n            margin: auto;\n        }\n    }\n\n    .redirect-cont{\n        margin-top: 40px;\n        display: flex;\n        align-items: center;\n        justify-content: space-evenly;\n        column-gap: 10px;\n        row-gap: 20px;\n        flex-wrap: wrap;\n    }\n\n    .redirect{\n        padding: 5px 10px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        gap: 5px;\n        fill: ",";\n        /* stroke: blue; */\n    }\n\n\n    .right-container{\n        animation: homePhotoAppear 2s ease forwards;\n        opacity: 0;\n\n        @media screen and (max-width: 767px){\n            width: 100%;\n            height: 500px;\n            -webkit-box-shadow: 0px 0px 25px 40px rgba(8, 27, 41, 1) inset;\n            -moz-box-shadow: 0px 0px 25px 40px rgba(8, 27, 41, 1) inset;\n            box-shadow: 0px 0px 25px 40px rgba(8, 27, 41, 1) inset;\n        }\n        \n        width: 100%;\n        height: auto;\n        overflow: hidden;\n        border-radius: 12px;\n        background-image: url(",");\n        background-size: cover;\n        background-position: center;\n        background-repeat: no-repeat;\n       -webkit-box-shadow: 20px 0px 25px 40px rgba(8, 27, 41, 1) inset;\n        -moz-box-shadow: 20px 0px 25px 40px rgba(8, 27, 41, 1) inset;\n        box-shadow: 20px 0px 25px 40px rgba(8, 27, 41, 1) inset;\n    }\n\n    @keyframes homePhotoAppear {\n        0%{\n            opacity: 0;\n        }\n        100%{\n            opacity: 1;\n        }\n    }\n\n"])),(n=>n.theme.color.main_color),(n=>n.theme.main_color_rust_lighter),(n=>n.theme.color.text_color),(n=>n.theme.color.main_color),(n=>n.theme.color.text_color),(n=>n.theme.color.main_color),(n=>n.theme.transition.main_transition),(n=>n.theme.transition.main_transition),(n=>n.theme.transition.main_transition),(n=>n.theme.transition.main_transition),(n=>n.theme.color.main_color),(n=>n.theme.color.text_color),(n=>n.theme.color.text_color),(n=>n.theme.color.second_bg_color),s);var d,p,x=t(5665),h=t(1087),m=t(6165),f=t.n(m),g=t(2791);function w(){return w=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},w.apply(this,arguments)}function b(n,e){let{title:t,titleId:i,...r}=n;return g.createElement("svg",w({className:"icon icon-point-right",ref:e,"aria-labelledby":i},r),t?g.createElement("title",{id:i},t):null,d||(d=g.createElement("use",{xlinkHref:"#icon-point-right"})),p||(p=g.createElement("symbol",{id:"icon-point-right",viewBox:"0 0 32 32"},g.createElement("path",{d:"M13 30h5c1.654 0 3-1.346 3-3 0-0.535-0.14-1.037-0.387-1.472 0.833-0.534 1.387-1.467 1.387-2.528 0-0.768-0.29-1.469-0.766-2 0.476-0.531 0.766-1.232 0.766-2 0-0.35-0.060-0.687-0.171-1h7.171c1.654 0 3-1.346 3-3s-1.346-3-3-3h-12.334l2.932-5.501c0.262-0.454 0.401-0.973 0.401-1.499 0-1.654-1.346-3-3-3-0.824 0-1.592 0.327-2.163 0.922-0.007 0.008-0.015 0.015-0.022 0.023l-6.815 7.474v-1.419c0-0.552-0.448-1-1-1h-6c-0.552 0-1 0.448-1 1v20c0 0.552 0.448 1 1 1h6c0.552 0 1-0.448 1-1v-1.382l4.553 2.276c0.139 0.069 0.292 0.106 0.447 0.106zM5 28c-0.552 0-1-0.448-1-1s0.448-1 1-1 1 0.448 1 1-0.448 1-1 1zM13.236 28l-5.236-2.618v-11.995l8.287-9.088c0.19-0.193 0.443-0.299 0.713-0.299 0.551 0 1 0.449 1 1 0 0.171-0.041 0.332-0.122 0.479-0.010 0.017-0.020 0.033-0.029 0.051l-3.732 7c-0.165 0.31-0.156 0.684 0.025 0.985s0.506 0.485 0.857 0.485h14c0.551 0 1 0.449 1 1s-0.449 1-1 1h-10c-0.552 0-1 0.448-1 1s0.448 1 1 1c0.551 0 1 0.449 1 1s-0.449 1-1 1c-0.552 0-1 0.448-1 1s0.448 1 1 1c0.551 0 1 0.449 1 1s-0.449 1-1 1h-1c-0.552 0-1 0.448-1 1s0.448 1 1 1c0.551 0 1 0.449 1 1s-0.449 1-1 1h-4.764z"}))))}const u=g.forwardRef(b);t.p;var y=t(184);const j=()=>{const{name:n,position1:e,position2:t,about1:i,about2:r,download_link:o}=x;return(0,y.jsxs)(l,{children:[(0,y.jsxs)("div",{className:"left-container order-one",children:[(0,y.jsxs)("h1",{className:"title",children:["Hi, I'm ",(0,y.jsx)("span",{children:n})]}),(0,y.jsx)("div",{className:"text-animated-cont",children:(0,y.jsx)("h2",{className:"title-animated",children:(0,y.jsx)(f(),{options:{strings:["".concat(e),"".concat(t)],autoStart:!0,loop:!0,pauseFor:2500,cursorClassName:"Typewriter__cursor"}})})}),(0,y.jsx)("p",{className:"text-description upper-text",children:i}),(0,y.jsx)("p",{className:"text-description lower-text",children:r}),(0,y.jsxs)("div",{className:"btn-cont",children:[(0,y.jsx)(h.OL,{className:"redirect-link",to:o,"aria-label":"CV Douwnload link",target:"_blank",rel:"noreferrer noopener",children:"Download CV"}),(0,y.jsx)(h.OL,{className:"redirect-link",to:"/contact",children:"Contact Me"})]}),(0,y.jsxs)("div",{className:"redirect-cont",children:[(0,y.jsxs)(h.OL,{className:"redirect-link redirect",to:"/about",children:[(0,y.jsx)(u,{className:"redirect-icon",width:24,height:24}),(0,y.jsx)("span",{children:"About"})]}),(0,y.jsxs)(h.OL,{className:"redirect-link redirect",to:"/education",children:[(0,y.jsx)(u,{className:"redirect-icon",width:24,height:24}),(0,y.jsx)("span",{children:"Education"})]}),(0,y.jsxs)(h.OL,{className:"redirect-link redirect",to:"/skills",children:[(0,y.jsx)(u,{className:"redirect-icon",width:24,height:24}),(0,y.jsx)("span",{children:"Skills"})]}),(0,y.jsxs)(h.OL,{className:"redirect-link redirect",to:"/portfolio",children:[(0,y.jsx)(u,{className:"redirect-icon",width:24,height:24}),(0,y.jsx)("span",{children:"Portfolio"})]})]})]}),(0,y.jsx)("div",{className:"right-container order-two"})]})},k=()=>(0,y.jsx)(i.$,{children:(0,y.jsx)(r.W,{children:(0,y.jsx)(j,{})})})}}]);
//# sourceMappingURL=239.b01c7c57.chunk.js.map