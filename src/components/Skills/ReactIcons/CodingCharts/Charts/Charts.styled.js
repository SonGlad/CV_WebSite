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

`

