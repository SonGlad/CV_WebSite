import { SkillsStyled } from "./Skills.styled";
// import { Icons } from "./ReactIcons/Icons";
import { NewIcons } from "./ReactIcons/NewIcons";



export const SkillsComponent = () => {


    return (
        <SkillsStyled>
            <h1 className="education-title">Professional <span>Skillset</span></h1>
            {/* <Icons/> */}
            <NewIcons/>
        </SkillsStyled>
    )
};