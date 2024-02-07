import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { StyledChart } from './Charts.styled';
import { useData } from '../../../../hooks/useData';
import { NavLink } from 'react-router-dom';


ChartJS.register(ArcElement, Tooltip, Legend);


export const HTMLChart = () => {
  const {individualAndTeamData} = useData();
  const componentLanguage = "HTML";


  const projectsWithHTML = individualAndTeamData.filter(project => {
    return project.languages.some(language => language.name === componentLanguage);
  });
  const projectsCountWithHTML = projectsWithHTML.length;



  const totalSizeAllLanguages = projectsWithHTML.reduce((total, project) => {
    return total + project.languages.reduce((sum, language) => sum + language.size, 0);
  }, 0);

  

  const totalSizeHTML = projectsWithHTML.reduce((total, project) => {
    const htmlLanguage = project.languages.find(language => language.name === componentLanguage);
    return total + (htmlLanguage ? htmlLanguage.size : 0);
  }, 0);



  const otherSize = totalSizeAllLanguages  - totalSizeHTML;
  const htmlPercent = Math.round((totalSizeHTML / totalSizeAllLanguages ) * 100);
  const validPercent = isNaN(htmlPercent) ? 0 : htmlPercent;



  const data = {
    datasets: [
      {
        data: [totalSizeHTML, otherSize],
        backgroundColor: ['rgba(204, 57, 0, 1)', 'transparent'],
        borderWidth: 0,
        borderRadius: totalSizeHTML === 0 ? 0 : 6,
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
        <div className='parrent-for-popup'>
          <p>Projects: <span>{projectsCountWithHTML}</span></p>
          <div className='pop-up-cont html-up-cont'>
            {projectsWithHTML.length === 0 ? (
                <p>no projects yet</p>
              ) : (
              <ul>
                {projectsWithHTML.map(({id, name, url}) => (
                  <li key={id}>
                    <NavLink className='nav-link' to={url}
                      aria-label="link"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      {name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </StyledChart>
  );
};