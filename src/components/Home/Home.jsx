import { HomeStyledContainer } from "./Home.styled"
import profile from "../../utils/profile.json";
import { NavLink } from "react-router-dom";



export const HomeSection = () => {
    const { name, position, about1, about2 } = profile;


    return (
        <HomeStyledContainer>
            <div className="left-container order-one">
                <h1 className="title">Hi, I'm <span className="title-span">{name}</span></h1>
                <div className="text-animated-cont">
                    <h2 className="title-animated">{position}</h2>
                </div>
                <p className="text-description upper-text">{about1}</p>
                <p className="text-description lower-text">{about2}</p>
                <div className="btn-cont">
                    <NavLink className="download-btn" to='https://drive.google.com/file/d/1kqb4M8RBzufNXjXk9Qft2puyAM6Vet6g/view?usp=sharing'
                        aria-label="CV Douwnload link"
                        target="_blank"
                        rel="noreferrer noopener"
                    >Download CV</NavLink>
                </div>
            </div>
            <div className="right-container order-two">
            </div>
        </HomeStyledContainer>
    )
};