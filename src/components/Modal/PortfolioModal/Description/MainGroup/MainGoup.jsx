import { MainGroupStyled } from "./MainGroup.styled";
import { NavLink } from "react-router-dom";



export const MainGroup = ({github, name, homepage}) => {


    return(
        <MainGroupStyled>
            <li className="main-group-item">
                <NavLink className="repository-link class-for-animation" to={github}
                    aria-label="GitHub link"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <strong>GitHub Repository</strong>
                </NavLink>
            </li>
            <li className="main-group-item">
                <NavLink className="repository-link class-for-animation" to={homepage}
                    aria-label="Live page link"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <strong>{name}</strong>
                </NavLink>
            </li>
        </MainGroupStyled>
    )
};