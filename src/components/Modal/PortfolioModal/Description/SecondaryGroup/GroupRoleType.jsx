import { SecondaryGroupStyled } from "./SecondaryGroup.styled";


export const GroupRoleType = ({role, type}) => {
    

    return(
        <SecondaryGroupStyled>
            <li className="seconadry-group-item">
                <p><strong>Role:</strong></p>
                <p>{role}</p>
            </li>
            <li className="seconadry-group-item">
                <p><strong>Type:</strong></p>
                <p>{type}</p>
            </li>
        </SecondaryGroupStyled>
    )
};