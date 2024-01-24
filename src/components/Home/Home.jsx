import { HomeStyledContainer } from "./Home.styled"
import profile from "../../utils/profile.json";
import { NavLink } from "react-router-dom";
import Typewriter from 'typewriter-effect';



export const HomeSection = () => {
    const { name, position1, position2, about1, about2 } = profile;


    const TypeWriterFunction = () => {
        return <Typewriter
                options={{
                strings: [`${position1}`, `${position2}`],
                autoStart: true,
                loop: true,
                pauseFor: 2500,
                cursorClassName: 'Typewriter__cursor',
            }}
        />
    };



    return (
        <HomeStyledContainer>
            <div className="left-container order-one">
                <h1 className="title">Hi, I'm <span className="title-span">{name}</span></h1>
                <div className="text-animated-cont">
                    <h2 className="title-animated">{TypeWriterFunction()}</h2>
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