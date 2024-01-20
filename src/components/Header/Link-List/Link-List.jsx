import { NavLink } from "react-router-dom";
import { LinkListStyled } from "./Link-List.styled";



export const LinkList = ({togglemenuBox}) => {
    return(
        <LinkListStyled>
            <li className="link-list-item">
                <NavLink className='nav-link' to='/' onClick={togglemenuBox}>Home</NavLink>
            </li>
            <li className="link-list-item">
                <NavLink className='nav-link' to='/about' onClick={togglemenuBox}>About</NavLink>
            </li>
            <li className="link-list-item">
                <NavLink className='nav-link' to='/education' onClick={togglemenuBox}>Education</NavLink>
            </li>
            <li className="link-list-item">
                <NavLink className='nav-link' to='/skills' onClick={togglemenuBox}>Skills</NavLink>
            </li>
            <li className="link-list-item">
                <NavLink className='nav-link' to='/portfolio' onClick={togglemenuBox}>Portfolio</NavLink>
            </li>
            <li className="link-list-item">
                <NavLink className='nav-link' to='/contact' onClick={togglemenuBox}>Contact</NavLink>
            </li>
        </LinkListStyled>
    )
};