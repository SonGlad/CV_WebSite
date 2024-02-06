import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { StyledChart } from './Charts.styled';
import { useData } from '../../../../../hooks/useData';


ChartJS.register(ArcElement, Tooltip, Legend);


export const SCSSChart = () => {
  const {individualAndTeamData} = useData();
  const componentLanguage = "SCSS";


  const projectsWithSCSS = individualAndTeamData.filter(project => {
    return project.languages.some(language => language.name === componentLanguage);
  });
  const projectsCountWithSCSS = projectsWithSCSS.length;



  const totalSizeAllLanguages = projectsWithSCSS.reduce((total, project) => {
    return total + project.languages.reduce((sum, language) => sum + language.size, 0);
  }, 0);

  

  const totalSizeSCSS = projectsWithSCSS.reduce((total, project) => {
    const scssLanguage = project.languages.find(language => language.name === componentLanguage);
    return total + (scssLanguage ? scssLanguage.size : 0);
  }, 0);



  const otherSize = totalSizeAllLanguages  - totalSizeSCSS;
  const scssPercent = Math.round((totalSizeSCSS / totalSizeAllLanguages ) * 100);
  const validPercent = isNaN(scssPercent) ? 0 : scssPercent;



  const data = {
    datasets: [
      {
        data: [totalSizeSCSS, otherSize],
        backgroundColor: ['rgba(204, 57, 0, 1)', 'transparent'],
        borderWidth: 0,
        borderRadius: totalSizeSCSS === 0 ? 0 : 6,
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
        <p>Projects: <span>{projectsCountWithSCSS}</span></p>
      </div>
    </StyledChart>
  );
};