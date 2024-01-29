import { EducationStyled } from "./Education.styled";
import { ReactComponent as CalendarIcon } from "../../images/svg-icons/calendar.svg";
import { NavLink } from "react-router-dom";
import { ReactComponent as FacebookIcon } from "../../images/svg-icons/facebook.svg";
import Profile from "../../utils/profile.json";



export const EducationComponent = () => {
    const { education } = Profile;


    return (
        <EducationStyled>
            <h1 className="education-title"><span>My </span>Journey</h1>
            <ul className="education-list">
                {education.map(({ id, year, degree, university, description, img_url, web_link, social_link}) => (
                    <li className="education-item" key={id}>
                        <div className="education-cont">
                            <div className="education-text-cont">
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
                            <div className="education-picture-cont">
                                <img className="education-picture" src={img_url} alt="mktf_picture" />
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </EducationStyled>
    )
};