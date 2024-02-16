import { ThirdGroupStyled } from "./ThirdGroup.styled";
import { nanoid } from "nanoid";
import { NavLink } from "react-router-dom";
import {ReactComponent as LinkSvg} from "../../../../../images/svg-icons/link2.svg";
import { useState, useEffect, useRef } from "react";


export const Collaborators = ({updatedCollaborators}) => {
    const [expanded, setExpanded] = useState();
    const collaboratorsRef = useRef();


    const handleButtonClick = () => {
        setExpanded(!expanded);
    };
    const handleButtonClose = () => {
        setExpanded(false);
    };


    useEffect(() => {
        const handleClickOutside = (event) => {
            if (collaboratorsRef.current && !collaboratorsRef.current.contains(event.target)) {
                setExpanded(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [collaboratorsRef]);


    return (
        <ThirdGroupStyled>
            <div className="collaborators-text">
                <p><strong>Collaborators:</strong></p>
            </div>
            <div className="collaborators-div" ref={collaboratorsRef}>
                {updatedCollaborators && updatedCollaborators.length > 0 ? (
                    <ul className={`collaborators-list ${expanded ? 'list-1' : ''}`}>
                        <button className={`drop-btn ${expanded ? 'active' : ''}`} 
                            type="button" onClick={handleButtonClick}>See All
                        </button>
                        {updatedCollaborators.map(({name, url}) => (
                            <li key={nanoid()} className="collaborators-item" onClick={handleButtonClose}>
                                <NavLink className="repository-link" to={url}
                                    aria-label="technical task link"
                                    target="_blank"
                                    rel="noreferrer noopener" 
                                >
                                    <LinkSvg className="svg-link" width={16} height={16}/>
                                    {name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>N/A</p>
                )}
            </div>
        </ThirdGroupStyled>
    )
};