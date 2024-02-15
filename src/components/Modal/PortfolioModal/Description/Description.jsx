import { DescriptionStyled } from "./Description.styled";
import { MainGroup } from "./MainGroup/MainGoup";
import { GroupRoleType } from "./SecondaryGroup/GroupRoleType";
import { GroupLink } from "./SecondaryGroup/GroupLink";
import { Collaborators } from "./ThirdGroup/Collaborators";
import { Technologies } from "./ThirdGroup/Technologies";
import { Libraries } from "./ThirdGroup/Libraries";
import Profile from "../../../../utils/profile.json";


export const DescriptionDiv = ({
    name, 
    type,
    role, 
    github, 
    homepage, 
    figma, 
    technical, 
    collaborators,
    technologies, 
    libraries, 
}) => {


    const updatedCollaborators = collaborators.filter(collaborator => {
        return collaborator.name !== Profile.name;
    });


    return(
        <DescriptionStyled>
            <MainGroup 
                github={github}
                name={name}
                homepage={homepage}
            />
            <GroupRoleType
                type={type}
                role={role}
            />
            <GroupLink
                technical={technical}
                figma={figma}
            />
            <Collaborators
                updatedCollaborators={updatedCollaborators}
            />
            <Technologies
                technologies={technologies}
            />
            <Libraries
                libraries={libraries}
            />
        </DescriptionStyled>
    )
};