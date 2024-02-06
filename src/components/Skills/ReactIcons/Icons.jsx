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
import IconReactNative from "./IconsList/ReactNativeIcon";
import IconTypeScript from "./IconsList/TypeScriptIcon";
import IconVue from "./IconsList/VueIcon";
import IconNext from "./IconsList/NextjsIcon";
import IconStyled from "./IconsList/StyledIcon";
import IconGraphql from "./IconsList/GraphQlIcon";
import Profile from "../../../utils/profile.json";
import { useEffect, useState, useMemo } from "react";


const IconComponents = [
    {"id": "IconHTML", Element: IconHTML}, 
    {"id": "IconCSS", Element: IconCSS}, 
    {"id": "IconJavaScript", Element: IconJavaScript}, 
    {"id": "IconReact", Element: IconReact}, 
    {"id": "IconRedux", Element: IconRedux}, 
    {"id": "IconGit", Element: IconGit}, 
    {"id": "IconGitHub", Element: IconGitHub}, 
    {"id": "IconNode", Element: IconNode }, 
    {"id": "IconVS", Element: IconVS}, 
    {"id": "IconSASS", Element: IconSASS}, 
    {"id": "IconStyled", Element: IconStyled}, 
    {"id": "IconHandlebars", Element: IconHandlebars}, 
    {"id": "IconMongoDB", Element: IconMongoDB}, 
    {"id": "IconAxios", Element: IconAxios}, 
    {"id": "IconPostman", Element: IconPostman}, 
    {"id": "IconReactNative", Element: IconReactNative}, 
    {"id": "IconTypeScript", Element: IconTypeScript}, 
    {"id": "IconVue", Element: IconVue}, 
    {"id": "IconNext", Element: IconNext},
    {"id": "IconGraphql", Element: IconGraphql}
];


export const Icons = () => {
    const {skills} = Profile;
    const [components, setComponents] = useState([]);


    const newIconComponents = useMemo(() => {
        return IconComponents.map((IconComponent) => {
            const id = IconComponent.id; 
            const skill = skills.find((skill) => skill.id === id);
    
            if (!skill) {
                return {};
            }
    
            const {value, link } = skill;
    
            return {
                id,
                Element: IconComponent.Element,
                value,
                link,
            };
        }).filter(({ value, link }) => value !== undefined && link !== undefined);
    }, [skills]);


    useEffect(() => {
        setComponents(newIconComponents);
    }, [newIconComponents]);


    return(
        <IconsStyledList>
            {components.map(({id, Element, value, link}) => (
                <li key={id} className="icons-list">
                    <Element className='icons'/>
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


