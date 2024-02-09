import { CodingChartsStyled } from "./CodingCharts.styled";
import { HTMLChart } from "./Charts/HTML";
import { CSSChart } from "./Charts/CSS";
import { JSChart } from "./Charts/JS";
import { SCSSChart } from "./Charts/SCSS";
import { TSChart } from "./Charts/TS";
import {HandlebarsChart} from "./Charts/Handlebars";
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from "react";



export const CodingCharts = () => {
    const [containerInView, setContainerInView] = useState(false);
 

    const [refContainer, containerRefInView] = useInView({ 
        triggerOnce: false, 
        // threshold: 0.1,
    });
    console.log(containerInView);

 

    useEffect(() => {
        if (containerRefInView){
            setContainerInView(true);
        } else {
            setContainerInView(false);
        }
    }, [containerRefInView]);


    return(
        <CodingChartsStyled ref={refContainer}>
            {containerInView && <HTMLChart/>}
            {containerInView && <CSSChart/>}
            {containerInView && <JSChart/>}
            {containerInView && <SCSSChart/>}
            {containerInView && <HandlebarsChart/>}
            {containerInView && <TSChart/>}
        </CodingChartsStyled>
    )
};
