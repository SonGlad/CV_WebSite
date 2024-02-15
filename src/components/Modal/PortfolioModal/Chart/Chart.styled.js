import styled from "styled-components";


export const ChartStyled = styled.div`
    padding: 20px 0;
    width: 100%;
    height: auto;
    /* background-color: transparent; */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;

    @media screen and (min-width: 440px){
        flex-direction: row;
        justify-content: space-around;
    }
    @media screen and (min-width: 1000px){
        width: 52%;
        gap: 10px;
        padding: 20px 10px;
    }
    @media screen and (min-width: 1440px){
        width: 40%;
    }

    .cont-for-doughnut{
        width: 150px;
        height: 150px;

        @media screen and (min-width: 550px){
            width: 200px;
            height: 200px;
        }
    }




    .chart-data-list{
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 20px;

        @media screen and (min-width: 440px){
            flex-wrap: nowrap;
            flex-direction: column;
            align-items: flex-start;
        }
    }
    
    .chart-data-item{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;

        & p{
            font-weight: 400;
            font-size: 14px;
            line-height: calc(24/16);

            
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

        & div{
            width: 14px;
            height: 14px;
            border-radius: 50%;

            @media screen and (min-width: 550px){
                width: 20px;
                height: 20px;
            }
            @media screen and (min-width: 1000px){
                width: 14px;
                height: 14px;
            }
            @media screen and (min-width: 1440px){
                width: 20px;
                height: 20px;
            }
        }
    }

    .chart-icon{
        width: 14px;
        height: 14px;

        @media screen and (min-width: 550px){
            width: 20px;
            height: 20px;
        }
        @media screen and (min-width: 1000px){
            width: 14px;
            height: 14px;
        }
        @media screen and (min-width: 1440px){
            width: 20px;
            height: 20px;
        }
    }
`