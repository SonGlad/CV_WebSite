import { NavLink } from "react-router-dom";
import { LinkListStyled } from "./Link-List.styled";



export const LinkList = ({toggleMenuBox}) => {
    return(
        <LinkListStyled>
            <li className="link-list-item">
                <NavLink className='nav-link' to='/' onClick={toggleMenuBox}>Home</NavLink>
            </li>
            <li className="link-list-item">
                <NavLink className='nav-link' to='/about' onClick={toggleMenuBox}>About</NavLink>
            </li>
            <li className="link-list-item">
                <NavLink className='nav-link' to='/education' onClick={toggleMenuBox}>Education</NavLink>
            </li>
            <li className="link-list-item">
                <NavLink className='nav-link' to='/skills' onClick={toggleMenuBox}>Skills</NavLink>
            </li>
            <li className="link-list-item">
                <NavLink className='nav-link' to='/portfolio' onClick={toggleMenuBox}>Portfolio</NavLink>
            </li>
            <li className="link-list-item">
                <NavLink className='nav-link' to='/contact' onClick={toggleMenuBox}>Contact</NavLink>
            </li>
        </LinkListStyled>
    )
};