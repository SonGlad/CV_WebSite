import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { StyledChart } from './Charts.styled';
import { useData } from '../../../../../hooks/useData';


ChartJS.register(ArcElement, Tooltip, Legend);


export const CSSChart = () => {
  const {individualAndTeamData} = useData();
  const componentLanguage = "CSS";


  const projectsWithCSS = individualAndTeamData.filter(project => {
    return project.languages.some(language => language.name === componentLanguage);
  });
  const projectsCountWithCSS = projectsWithCSS.length;



  const totalSizeAllLanguages = projectsWithCSS.reduce((total, project) => {
    return total + project.languages.reduce((sum, language) => sum + language.size, 0);
  }, 0);

  

  const totalSizeCSS = projectsWithCSS.reduce((total, project) => {
    const cssLanguage = project.languages.find(language => language.name === componentLanguage);
    return total + (cssLanguage ? cssLanguage.size : 0);
  }, 0);



  const otherSize = totalSizeAllLanguages  - totalSizeCSS;
  const cssPercent = Math.round((totalSizeCSS / totalSizeAllLanguages ) * 100);
  const validPercent = isNaN(cssPercent) ? 0 : cssPercent;

  const data = {
    datasets: [
      {
        data: [totalSizeCSS, otherSize],
        backgroundColor: ['#cc3900', 'transparent'],
        borderWidth: 0,
        borderRadius: totalSizeCSS === 0 ? 0 : 6,
      },
    ],
  };

  const options = {
    cutout: '80%',
    hover: { mode: null },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  };

  return (
    <StyledChart>
      <div className='chart-wrapper'>
        <Doughnut data={data} options={options} />
          <div>
            <p>{validPercent}</p>
            <span>%</span>
          </div>
      </div>
      <div className='description'>
        <p>Language: <span>{componentLanguage}</span></p>
        <p>Projects: <span>{projectsCountWithCSS}</span></p>
      </div>
    </StyledChart>
  );
};