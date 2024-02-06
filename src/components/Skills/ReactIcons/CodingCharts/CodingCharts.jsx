import { CodingChartsStyled } from "./CodingCharts.styled";
import { HTMLChart } from "./Charts/HTML";
import { CSSChart } from "./Charts/CSS";
import { JSChart } from "./Charts/JS";
import { SCSSChart } from "./Charts/SCSS";
import { TSChart } from "./Charts/TS";
import {HandlebarsChart} from "./Charts/Handlebars";




export const CodingCharts = () => {
    return(
        <CodingChartsStyled>
            <HTMLChart/>
            <CSSChart/>
            <JSChart/>
            <SCSSChart/>
            <HandlebarsChart/>
            <TSChart/>
        </CodingChartsStyled>
    )
}