import { MainGroupStyled } from "./MainGroup.styled";
import { NavLink } from "react-router-dom";
import {ReactComponent as Link2Icon} from "../../../../../images/svg-icons/link2.svg"


export const MainGroup = ({github, name, homepage}) => {


    return(
        <MainGroupStyled>
            <li className="main-group-item">
                <NavLink className="repository-link class-for-animation" to={github}
                    aria-label="GitHub link"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <Link2Icon className="svg-link" width={16} height={16}/>
                    <strong>GitHub Repository</strong>
                </NavLink>
            </li>
            <li className="main-group-item">
                <NavLink className="repository-link class-for-animation" to={homepage}
                    aria-label="Live page link"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <Link2Icon className="svg-link" width={16} height={16}/>
                    <strong>{name}</strong>
                </NavLink>
            </li>
        </MainGroupStyled>
    )
};