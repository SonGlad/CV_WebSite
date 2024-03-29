import { EducationStyled } from "./Education.styled";
import { ReactComponent as CalendarIcon } from "../../images/svg-icons/calendar.svg";
import { NavLink } from "react-router-dom";
import { ReactComponent as FacebookIcon } from "../../images/svg-icons/facebook.svg";
import Profile from "../../utils/profile.json";
import { SwiperComponent } from "./Swiper-Slider/Swiper";



export const EducationComponent = () => {
    const { education } = Profile;


    return (
        <EducationStyled>
            <h1 className="education-title"><span>My </span>Journey</h1>
            <ul className="education-list">
                {education.map(({ id, year, degree, university, description, img_url, web_link, social_link}, index) => (
                    <li className="education-item" key={id} style={{'--i': index}}>
                        <div className="education-cont">
                            <div className="education-text-cont" style={{'--i': 2 * index + 1}}>
                                <div className="education">
                                    <CalendarIcon className="calendar-icon" width={16} height={16}/>
                                    <p className="year">{year}</p>
                                </div>
                                <h2 className="degree-title">{degree}</h2>
                                <h3 className="degree-descr">{university}</h3>
                                <p className="degree-text">{description}</p>
                                <div className="education-link-cont">
                                    <NavLink className="education-web-link" to={web_link}
                                        aria-label="Facebook link"
                                        target="_blank"
                                        rel="noreferrer noopener">Web-Site
                                    </NavLink>
                                    <NavLink className="education-social-link" to={social_link}
                                        aria-label="Facebook link"
                                        target="_blank"
                                        rel="noreferrer noopener">
                                        <FacebookIcon className="education-icon" width={22} height={22}/>
                                    </NavLink>
                                </div>
                            </div>
                            <SwiperComponent id={id} img_url={img_url} index={index}/>
                        </div>
                    </li>
                ))}
            </ul>
        </EducationStyled>
    )
};