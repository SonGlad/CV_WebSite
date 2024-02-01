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
import Profile from "../../../utils/profile.json";
import { useEffect, useState, useMemo } from "react";
// import { nanoid } from "nanoid";


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
    IconReactNative,
    IconTypeScript,
    IconNext,
    IconVue,
];


export const Icons = () => {
    const {skills} = Profile;
    const [components, setComponents] = useState([]);
    console.log("UseState:", components);

    

    // const newIconComponents = IconComponents.map((IconComponent) => {
    //     // const id = IconComponent.name.slice(4, IconComponent.name.length);
    //     const name = IconComponent.name.replace("Icon", "").toLowerCase();
    //     console.log(name);
    //     const skill = skills.find(skill => skill.hasOwnProperty(name));


    //     if (!skill) {
    //         // console.warn(`Skill with id ${id} not found in skills data`);
    //         return {};
    //     }
    
    //     const { [name]: value, link } = skill;
        
    //     return {
    //         name,
    //         Component: IconComponent,
    //         value,
    //         link,
    //     };
    // })
    // .filter(({ value, link }) => value !== undefined && link !== undefined);


    // useEffect(() => {
    //     if(!components){
    //         setComponents(newIconComponents);
    //     }
    // }, [components, newIconComponents]);


    const newIconComponents = useMemo(() => {
        return IconComponents.map((IconComponent) => {
            // const id = IconComponent.name.replace("Icon", "").toLowerCase();
            // const skill = skills.find(skill => skill.hasOwnProperty(id));
            // const id = nanoid();
            // const skill = skills.find((skill) => skill.id === id);
            const id = IconComponent.name;
            const skill = skills.find((skill) => skill.id === id);
            console.log("ID:", id);
            console.log("SKILL:", skill);
    
            if (!skill) {
                return {};
            }
    
            const { value, link } = skill;
    
            return {
                id,
                Component: IconComponent,
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
            {components.map(({id, Component, value, link}) => (
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


