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
import IconVite from "./IconsList/Vite";
import IconGSAP from "./IconsList/GSAP";
import IconThreejs from "./IconsList/ThreeJS";
import IconFigma from "./IconsList/FigmaIcon";
import IconNetlify from "./IconsList/IconNetlify";
import IconGodaddy from "./IconsList/GoDaddyIcon";
import IconCoronarenderer from "./IconsList/RenderIcon";
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
    {"id": "IconVite", Element: IconVite, "type": "Dev-Tools"},
    {"id": "IconGSAP", Element: IconGSAP, "type": "Frontend"},
    {"id": "IconThreeJS", Element: IconThreejs, "type": "Frontend"},
    {"id": "IconSASS", Element: IconSASS}, 
    {"id": "IconStyled", Element: IconStyled}, 
    {"id": "IconHandlebars", Element: IconHandlebars}, 
    {"id": "IconMongoDB", Element: IconMongoDB}, 
    {"id": "IconAxios", Element: IconAxios}, 
    {"id": "IconPostman", Element: IconPostman, "type": "DevOps"}, 
    {"id": "IconFigma", Element: IconFigma, "type": "Dev-Tools"},
    {"id": "IconNetlify", Element: IconNetlify, "type": "DevOps"},
    {"id": "IconGoDaddy", Element: IconGodaddy, "type": "DevOps"},
    {"id": "IconRender", Element: IconCoronarenderer, "type": "DevOps"},
    {"id": "IconReactNative", Element: IconReactNative, "type": "Frontend, Mobile-Development"}, 
    {"id": "IconTypeScript", Element: IconTypeScript, "type": "Frontend"}, 
    {"id": "IconVue", Element: IconVue, "type": "Frontend"}, 
    {"id": "IconNext", Element: IconNext, "type": "Frontend"},
    {"id": "IconGraphql", Element: IconGraphql, "type": "Backend"},
];


export const Icons = () => {
    const {skills} = Profile;
    const [components, setComponents] = useState([]);


    const newIconComponents = useMemo(() => {
        return IconComponents.map((IconComponent, index) => {
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
                index,
            };
        }).filter(({ value, link }) => value !== undefined && link !== undefined);
    }, [skills]);


    useEffect(() => {
        setComponents(newIconComponents);
    }, [newIconComponents]);


    return(
        <IconsStyledList>
            <ul className="icon-list">
                {components.map(({id, Element, value, link, index}) => (
                    <li key={id} className="icons-item" style={{ '--i': index + 1}}>
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
            </ul>
        </IconsStyledList>
    )
};


