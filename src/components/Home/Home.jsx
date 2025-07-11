import { HomeStyledContainer } from "./Home.styled"
import Profile from "../../utils/profile.json";
import { NavLink } from "react-router-dom";
import Typewriter from 'typewriter-effect';
import {ReactComponent as FingerIcon} from "../../images/svg-icons/finger.svg";



export const HomeSection = () => {
    const { name, position1, position2, about1, about2, 
        // download_link 
    } = Profile;


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
                <h1 className="title">Hi, I'm <span>{name}</span></h1>
                <div className="text-animated-cont">
                    <h2 className="title-animated">{TypeWriterFunction()}</h2>
                </div>
                <p className="text-description upper-text">{about1}</p>
                <p className="text-description lower-text">{about2}</p>
                <div className="btn-cont">
                    <NavLink className="redirect-link" to={"#"}
                        aria-label="CV Douwnload link"
                        target="_blank"
                        rel="noreferrer noopener"
                    >Download CV
                    </NavLink>
                    <NavLink className="redirect-link" to='/contact'>
                        Contact Me
                    </NavLink>
                </div>
                <div className="redirect-cont">
                    <NavLink className="redirect-link redirect" to='/about' style={{'--i': 1}}>
                        <FingerIcon className="redirect-icon" width={24} height={24}/>    
                        <span>About</span>
                    </NavLink>
                    <NavLink className="redirect-link redirect" to='/education' style={{'--i': 2}}>
                        <FingerIcon className="redirect-icon" width={24} height={24}/>    
                        <span>Education</span>
                    </NavLink>
                    <NavLink className="redirect-link redirect" to='/skills' style={{'--i': 3}}>
                        <FingerIcon className="redirect-icon" width={24} height={24}/>    
                        <span>Skills</span>
                    </NavLink>
                    <NavLink className="redirect-link redirect" to='/portfolio' style={{'--i': 4}}>
                        <FingerIcon className="redirect-icon" width={24} height={24}/>    
                        <span>Portfolio</span>
                    </NavLink>
                </div>
            </div>
            <div className="right-container order-two"/>
        </HomeStyledContainer>
    )
};