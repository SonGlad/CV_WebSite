import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { StyledChart } from './Charts.styled';
import { useData } from '../../../../hooks/useData';


ChartJS.register(ArcElement, Tooltip, Legend);


export const TSChart = () => {
  const {individualAndTeamData} = useData();
  const componentLanguage = "TypeScript";


  const projectsWithTS = individualAndTeamData.filter(project => {
    return project.languages.some(language => language.name === componentLanguage);
  });
  const projectsCountWithTS = projectsWithTS.length;



  const totalSizeAllLanguages = projectsWithTS.reduce((total, project) => {
    return total + project.languages.reduce((sum, language) => sum + language.size, 0);
  }, 0);

  

  const totalSizeTS = projectsWithTS.reduce((total, project) => {
    const tsLanguage = project.languages.find(language => language.name === componentLanguage);
    return total + (tsLanguage ? tsLanguage.size : 0);
  }, 0);



  const otherSize = totalSizeAllLanguages  - totalSizeTS;
  const tsPercent = Math.round((totalSizeTS / totalSizeAllLanguages ) * 100);
  const validPercent = isNaN(tsPercent) ? 0 : tsPercent;


  const data = {
    datasets: [
      {
        data: [totalSizeTS, otherSize],
        backgroundColor: ['rgba(204, 57, 0, 1)', 'transparent'],
        borderWidth: 0,
        borderRadius: totalSizeTS === 0 ? 0 : 6,
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
        <p>Projects: <span>{projectsCountWithTS}</span></p>
      </div>
    </StyledChart>
  );
};