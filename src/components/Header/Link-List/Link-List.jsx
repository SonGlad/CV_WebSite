import { NavLink } from "react-router-dom";
import { LinkListStyled } from "./Link-List.styled";
import { ReactComponent as HomeIcon } from "../../../images/svg-icons/home.svg";
import { ReactComponent as AboutIcon } from "../../../images/svg-icons/user.svg";
import { ReactComponent as EducationIcon } from "../../../images/svg-icons/education.svg";
import { ReactComponent as SkillsIcon } from "../../../images/svg-icons/skills.svg";
import { ReactComponent as PortfolioIcon } from "../../../images/svg-icons/portfolio.svg";
import { ReactComponent as ContactIcon } from "../../../images/svg-icons/contact.svg";



export const LinkList = ({toggleMenuBox}) => {
    return(
        <LinkListStyled>
            <li className="link-list-item">
                <NavLink className='nav-link' to='/' onClick={toggleMenuBox}>
                    <HomeIcon className="header-icon" width={16} height={16}/>
                    <span className="header-link-text">Home</span>
                </NavLink>
            </li>
            <li className="link-list-item">
                <NavLink className='nav-link' to='/about' onClick={toggleMenuBox}>
                    <AboutIcon className="header-icon" width={16} height={16}/>
                    <span className="header-link-text">About</span>
                </NavLink>
            </li>
            <li className="link-list-item">
                <NavLink className='nav-link' to='/education' onClick={toggleMenuBox}>
                    <EducationIcon className="header-icon" width={16} height={16}/>
                    <span className="header-link-text">Education</span>
                </NavLink>
            </li>
            <li className="link-list-item">
                <NavLink className='nav-link' to='/skills' onClick={toggleMenuBox}>
                    <SkillsIcon className="header-icon" width={16} height={16}/>
                    <span className="header-link-text">Skills</span>
                </NavLink>
            </li>
            <li className="link-list-item">
                <NavLink className='nav-link' to='/portfolio' onClick={toggleMenuBox}>
                    <PortfolioIcon className="header-icon" width={16} height={16}/>
                    <span className="header-link-text">Portfolio</span>
                </NavLink>
            </li>
            <li className="link-list-item">
                <NavLink className='nav-link' to='/contact' onClick={toggleMenuBox}>
                    <ContactIcon className="header-icon" width={16} height={16}/>
                    <span className="header-link-text">Contact</span>
                </NavLink>
            </li>
        </LinkListStyled>
    )
};