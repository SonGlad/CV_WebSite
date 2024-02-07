import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { StyledChart } from './Charts.styled';
import { useData } from '../../../../hooks/useData';
import { NavLink } from 'react-router-dom';


ChartJS.register(ArcElement, Tooltip, Legend);


export const JSChart = () => {
  const {individualAndTeamData} = useData();
  const componentLanguage = "JavaScript";


  const projectsWithJS = individualAndTeamData.filter(project => {
    return project.languages.some(language => language.name === componentLanguage);
  });
  const projectsCountWithJS = projectsWithJS.length;



  const totalSizeAllLanguages = projectsWithJS.reduce((total, project) => {
    return total + project.languages.reduce((sum, language) => sum + language.size, 0);
  }, 0);

  

  const totalSizeJS = projectsWithJS.reduce((total, project) => {
    const jsLanguage = project.languages.find(language => language.name === componentLanguage);
    return total + (jsLanguage ? jsLanguage.size : 0);
  }, 0);



  const otherSize = totalSizeAllLanguages  - totalSizeJS;
  const jsPercent = Math.round((totalSizeJS / totalSizeAllLanguages ) * 100);
  const validPercent = isNaN(jsPercent) ? 0 : jsPercent;


  const data = {
    datasets: [
      {
        data: [totalSizeJS, otherSize],
        backgroundColor: ['#cc3900', 'transparent'],
        borderWidth: 0,
        borderRadius: totalSizeJS === 0 ? 0 : 6,
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
          <p>Projects: <span>{projectsCountWithJS}</span></p>
          <div className='pop-up-cont js-up-cont'>
            {projectsWithJS.length === 0 ? (
                <p>no projects yet</p>
              ) : (
              <ul>
                {projectsWithJS.map(({id, name, url}) => (
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