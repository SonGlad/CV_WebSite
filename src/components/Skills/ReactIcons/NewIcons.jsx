// import {nanoid } from "nanoid";
import IconReact from "./IconsList/ReactIcon";
import IconRedux from "./IconsList/ReduxIcon";

const icons =[
    {Element: IconReact,
        "id": "IconReact"},
    {Element: IconRedux,
        "id": "IconRedux"}
]



export const NewIcons = () => {


    return (
        <ul>
            {icons.map(({Element, id}) => (
                <li key={id}>
                    <Element/>
                </li>
            ))}
        </ul>
    )
}