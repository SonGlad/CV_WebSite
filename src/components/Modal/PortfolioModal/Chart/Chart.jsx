import { ChartStyled } from "./Chart.styled";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { nanoid } from "nanoid";
import {ReactComponent as HandlebarsIcon} from "../../../../images/svg-icons/brands/handlebars.svg";
import {ReactComponent as HTMLIcon} from "../../../../images/svg-icons/brands/html.svg";
import {ReactComponent as CSSIcon} from "../../../../images/svg-icons/brands/css.svg";
import {ReactComponent as SCSSIcon} from "../../../../images/svg-icons/brands/scss.svg";
import {ReactComponent as JavaScriptIcon} from "../../../../images/svg-icons/brands/javascript.svg";
import {ReactComponent as TypeScriptIcon} from "../../../../images/svg-icons/brands/typescript.svg";
import {ReactComponent as VueIcon} from "../../../../images/svg-icons/brands/vue.svg";


ChartJS.register(ArcElement, Tooltip, Legend);


export const ChartDiv = ({languages}) => {

    const icons = [
        {name: 'HTML', icon: HTMLIcon},
        {name: 'Handlebars', icon: HandlebarsIcon},
        {name: 'CSS', icon: CSSIcon},
        {name: 'SCSS', icon: SCSSIcon},
        {name: 'JavaScript', icon: JavaScriptIcon},
        {name: 'TypeScript', icon: TypeScriptIcon},
        {name: 'Vue', icon: VueIcon},
    ];

    const totalSize = languages.reduce((acc, item) => acc + item.size, 0);

    const chartColors = [
        '#241206', 
        '#EBEBEB',
        '#898989', 
        '#852b0a', 
        '#cc3900', 
        '#333333', 
    ];


    const iconMap = {};
    icons.forEach(({ name, icon }) => {
        iconMap[name] = icon;
    });


    const languagesWithIcons = languages.map(({ name, size }) => ({
        name,
        size: ((size / totalSize) * 100).toFixed(1) + '%',
        Icon: iconMap[name],
        color: chartColors[icons.findIndex(icon => icon.name === name)],
    }));

   
    const data = languages.map(item => ((item.size / totalSize) * 100).toFixed(1));
    const labels = languages.map(item => item.name);
    const colors = languagesWithIcons.map(item => item.color);
  

    const chartData = {
        labels: labels,
        datasets: [
            {
            data: data,
            backgroundColor: colors,
            borderWidth: 0,
            },
        ],
    };

    const options = {
        cutout: '50%',
        plugins: {
            legend: {
            display: false,
            },
            tooltip: {
                enabled: true,
                callbacks: {
                    label: function(context) {
                        return context.label + ': ' + context.formattedValue + '%';
                    }
                }
            },
        },
    };


    return (
        <ChartStyled>
            <div className="cont-for-doughnut">
                <Doughnut data={chartData} options={options}/>
            </div>
            <ul className="chart-data-list">
                {languagesWithIcons.map(({name, size, Icon, color}) => (
                    <li key={nanoid()} className="chart-data-item">
                        <Icon className='chart-icon' width={24} height={24}/>
                        <div style={{background: `${color}`}}></div>
                        <p>{name}:</p>
                        <p>{size}</p>
                    </li>
                ))}
            </ul>
        </ChartStyled>
    )
};