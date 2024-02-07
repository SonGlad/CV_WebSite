import styled from 'styled-components';


export const StyledChart = styled.div`
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 20px;

  .chart-wrapper {
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: ${props => props.theme.color.light_theme1};
    position: relative;

    @media screen and (min-width: 400px){
      width: 150px;
      height: 150px;
    }

    @media screen and (min-width: 780px){
      width: 200px;
      height: 200px;
    }

    & div {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 80%;
      height: 80%;
      background-color: ${props => props.theme.color.bg_color};
      border-radius: 50%;
      padding: 8px 0;
    }

    & p {
      font-size: 14px;
      color: ${props => props.theme.color.primary_grey};
      font-weight: 400;
      line-height: 1.4;

      @media screen and (min-width: 400px){
        font-size: 18px;
      }

      @media screen and (min-width: 780px){
        font-size: 22px;
      }
    }
  }


  .description{
    padding: 10px 0;

    @media screen and (min-width: 400px){
      padding: 20px 0;
    }

    @media screen and (min-width: 780px){
      padding: 30px 0;
    }

    & p{
      margin-bottom: 10px;
      font-size: 12px;

      @media screen and (min-width: 400px){
        margin-bottom: 15px;
        font-size: 14px;
      }

      @media screen and (min-width: 780px){
        margin-bottom: 20px;
        font-size: 16px;
      }
    }

    & span{
      color: ${props => props.theme.color.main_color};
    }
  }


  ::-webkit-scrollbar {
    width: 0px;
  }

  .parrent-for-popup{
    position: relative;
    cursor: pointer;
    width: 90px;
  }

  .pop-up-cont{
    position: absolute;
    z-index: 1;
    width: max-content;
    overflow: auto;
    background-color: rgba(0,0,0, 0.6);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    font-size: 12px;
    top: 0;
    left: 0;
    padding: 0px;

    @media screen and (min-width: 780px){
      font-size: 16px;
    }

    & li{
      margin-bottom: 5px;
    }
    & li:last-child{
      margin-bottom: 0;
    }

    .nav-link{
      color: ${p => p.theme.color.text_color};
      transition: color ${p => p.theme.transition.main_transition};

      &:hover, 
      &:focus{
        color: ${p => p.theme.color.main_color};
      }
    }
  }



  .html-up-cont{
    visibility: hidden;
    opacity: 0;
    height: 0px;
    transition: all ${p => p.theme.transition.main_transition};
    transform: translate(-30px, 20px);

    @media screen and (min-width: 780px){
      transform: translate(-50px, 20px);
    }
    @media screen and (min-width: 900px){
      transform: translate(-70px, 20px);
    }
    @media screen and (min-width: 1000px){
      transform: translate(-80px, 20px);
    }
  }

  .parrent-for-popup:hover .html-up-cont{
    visibility: visible;
    opacity: 1;
    height: 225px;
    padding: 10px;

    @media screen and (min-width: 780px){
      height: 275px;
    }
  } 



  .css-up-cont{
    visibility: hidden;
    opacity: 0;
    height: 0px;
    transition: all ${p => p.theme.transition.main_transition};
    transform: translate(-110px, 20px);

    @media screen and (min-width: 500px){
      transform: translate(-65px, 20px);
    }
    @media screen and (min-width: 780px){
      transform: translate(-85px, 20px);
    }
  }

  .parrent-for-popup:hover .css-up-cont{
    visibility: visible;
    opacity: 1;
    height: 95px;
    padding: 10px;

    @media screen and (min-width: 780px){
      height: 115px;
    }
  }
  
  

  .js-up-cont{
    visibility: hidden;
    opacity: 0;
    height: 0px;
    transition: all ${p => p.theme.transition.main_transition};
    transform: translate(-30px, 20px);

    @media screen and (min-width: 526px){
      transform: translate(-80px, 20px);
    }
    @media screen and (min-width: 655px){
      transform: translate(-40px, 20px);
    }
    @media screen and (min-width: 780px){
      transform: translate(-80px, 20px);
    }
    @media screen and (min-width: 1000px){
      transform: translate(-50px, 20px);
    }
  }

  .parrent-for-popup:hover .js-up-cont{
    visibility: visible;
    opacity: 1;
    height: 225px;
    padding: 10px;

    @media screen and (min-width: 780px){
      height: 275px;
    }
  }
  
  
  .scss-up-cont{
    visibility: hidden;
    opacity: 0;
    height: 0px;
    transition: all ${p => p.theme.transition.main_transition};
    transform: translate(-75px, 20px);


    @media screen and (min-width: 400px){
      transform: translate(-50px, 20px);
    }
    @media screen and (min-width: 526px){
      transform: translate(-30px, 20px);
    }
    @media screen and (min-width: 780px){
      transform: translate(-50px, 20px);
    }
    @media screen and (min-width: 900px){
      transform: translate(-60px, 20px);
    }
  }

  .parrent-for-popup:hover .scss-up-cont{
    visibility: visible;
    opacity: 1;
    height: 70px;
    padding: 10px;

    @media screen and (min-width: 780px){
      height: 90px;
    }
  }
  
  

  .hb-up-cont{
    visibility: hidden;
    opacity: 0;
    height: 0px;
    transition: all ${p => p.theme.transition.main_transition};
    transform: translate(-30px, 20px);

    @media screen and (min-width: 526px){
      transform: translate(-40px, 20px);
    }
    @media screen and (min-width: 780px){
      transform: translate(-30px, 20px);
    }
  }

  .parrent-for-popup:hover .hb-up-cont{
    visibility: visible;
    opacity: 1;
    height: 55px;
    padding: 10px;

    @media screen and (min-width: 780px){
      height: 65px;
    }
  }


  .ts-up-cont{
    visibility: hidden;
    opacity: 0;
    height: 0px;
    transition: all ${p => p.theme.transition.main_transition};
    transform: translate(-20px, 20px);

    @media screen and (min-width: 780px){
      transform: translate(-30px, 20px);
    }
  }

  .parrent-for-popup:hover .ts-up-cont{
    visibility: visible;
    opacity: 1;
    height: 55px;
    padding: 10px;

    @media screen and (min-width: 780px){
      height: 65px;
    }
  }

`

