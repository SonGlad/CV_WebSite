import { NavLink } from "react-router-dom";
import {ReactComponent as LinkIcon} from "../../../images/svg-icons/link.svg";
import { IconsStyledList } from "./Icons.styled";
import IconReact from "./IconsList/ReactIcon";
import IconRedux from "./IconsList/ReduxIcon";
import IconHTML from "./IconsList/HtmlIcon";
import IconJavaScript from "./IconsList/JavaScriptIcon";
import IconCSS from "./IconsList/CssIcon";
import IconGit from "./IconsList/GitIcon";
import IconGitHub from "./IconsList/GitHubIcon";
import IconVS from "./IconsList/VisualStudioIcon";
import IconNode from "./IconsList/NodeJsIcon";
import IconSASS from "./IconsList/SassIcon";
import IconHandlebars from "./IconsList/HandlebarsIcon";
import IconMongoDB from "./IconsList/MongoDbIcon";
import IconAxios from "./IconsList/AxiosIcon";
import IconPostman from "./IconsList/PostmanIcon";
// import IconReactNative from "./IconsList/ReactNativeIcon";
// import IconTypeScript from "./IconsList/TypeScriptIcon";
// import IconVue from "./IconsList/VueIcon";
// import IconNext from "./IconsList/NextjsIcon";
import Profile from "../../../utils/profile.json";


const IconComponents = [
    IconHTML, 
    IconCSS,
    IconJavaScript,
    IconReact, 
    IconRedux, 
    IconVS,
    IconGitHub,
    IconGit,
    IconSASS,
    IconHandlebars,
    IconAxios,
    IconNode,
    IconMongoDB,
    IconPostman,
    // IconReactNative,
    // IconTypeScript,
    // IconNext,
    // IconVue,
];


export const Icons = () => {
    // const { skills } = profile;
    // const { [id]: value, link } = skills.find(skill => skill.hasOwnProperty(id)) || {};
    
    
    const {skills} = Profile;
    console.log('SKILLS:', skills);
    const newIconComponents = IconComponents.map((IconComponent) => {
        const id = IconComponent.name.replace("Icon", "");
        const skill = skills.find(skill => skill.hasOwnProperty(id));
        console.log('SKILL:', skill);

        if (!skill) {
            console.warn(`Skill with id ${id} not found in skills data`);
            return {};
        }
    
        const { [id]: value, link } = skill;
        
        return {
            id,
            Component: IconComponent,
            value,
            link,
        };
    })
    .filter(({ value, link }) => value !== undefined && link !== undefined);

  
    
    return(
        <IconsStyledList>
            {newIconComponents.map(({id, Component, value, link}) => (
                <li key={id} className="icons-list">
                    <Component className='icons'/>
                    <div className="value-cont">
                        <p className="value-text">{value}</p>
                        <NavLink className='redirect-link' to={link}
                            aria-label="redirect link"
                            target="_blank"
                            rel="noreferrer noopener">
                            <LinkIcon className="redirect-icon" width={24} height={24}/>
                        </NavLink>
                    </div>
                </li>
            ))}
        </IconsStyledList>
    )
};


