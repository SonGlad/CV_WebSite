import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { StyledChart } from './Charts.styled';
import { useData } from '../../../../hooks/useData';
import { NavLink } from 'react-router-dom';


ChartJS.register(ArcElement, Tooltip, Legend);


export const HandlebarsChart = () => {
  const {individualAndTeamData} = useData();
  const componentLanguage = "Handlebars";


  const projectsWithHandlebars = individualAndTeamData.filter(project => {
    return project.languages.some(language => language.name === componentLanguage);
  });
  const projectsCountWithHandlebars = projectsWithHandlebars.length;



  const totalSizeAllLanguages = projectsWithHandlebars.reduce((total, project) => {
    return total + project.languages.reduce((sum, language) => sum + language.size, 0);
  }, 0);

  

  const totalSizeHandlebars = projectsWithHandlebars.reduce((total, project) => {
    const handlebarsLanguage = project.languages.find(language => language.name === componentLanguage);
    return total + (handlebarsLanguage ? handlebarsLanguage.size : 0);
  }, 0);



  const otherSize = totalSizeAllLanguages  - totalSizeHandlebars;
  const handlebarsPercent = Math.round((totalSizeHandlebars / totalSizeAllLanguages ) * 100);
  const validPercent = isNaN(handlebarsPercent) ? 0 : handlebarsPercent;



  const data = {
    datasets: [
      {
        data: [totalSizeHandlebars , otherSize],
        backgroundColor: ['rgba(204, 57, 0, 1)', 'transparent'],
        borderWidth: 0,
        borderRadius: totalSizeHandlebars === 0 ? 0 : 6,
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
          <p>Projects: <span>{projectsCountWithHandlebars}</span></p>
          <div className='pop-up-cont hb-up-cont'>
            {projectsWithHandlebars.length === 0 ? (
                <p>no projects yet</p>
              ) : (
              <ul>
                {projectsWithHandlebars.map(({id, name, url}) => (
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