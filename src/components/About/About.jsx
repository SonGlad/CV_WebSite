import { AboutStyled } from "./About.styled";
import { LeftAnimation } from "./LeftAnimation/LeftAnimation";
import { RightAnimation } from "./RightAnimation/RightAnimation";
import MyPicture from "../../images/images/my_photo_2.png";
import profile from "../../utils/profile.json";
import GitHubCalendar from 'react-github-calendar';



export const AboutSection = () => {
    const { about1, about2, about3 } = profile;

    const explicitTheme = {
        light: ['#333333', '#5C5C5C', '#898989', '#B9B9B9', '#EBEBEB'],
        dark: ['#241206', '#64230b', '#852b0a', '#a83206', '#cc3900'],
    };



    return (
        <AboutStyled>
            <h1 className="about-title">About <span>Me</span></h1>
            <div className="animation-container">
                <div className="about-cont">
                    <div className="about-img-cont">
                        <img className="about-img" src={MyPicture} alt="my_picture" width={280} />
                        <span className="circle-filter"></span>
                        <span className="circle-spin1"></span>
                        <span className="circle-spin2"></span>
                    </div>
                    <p className="about-content-text">{about1}</p>
                </div>
                <div className="coding-container-left">
                    <LeftAnimation/>
                    <p className="about-content-text order-two">{about2}</p>
                </div>
                <div className="coding-container-right">
                    <RightAnimation />
                    <p className="about-content-text">{about3}</p>
                </div>
            </div>
            <div className="github-cont">
                <h2 className="github-title"><span>Statistics</span> of my contributions</h2>
                <div className="github-data">
                    <GitHubCalendar
                        username="SonGlad"
                        blockSize={16}
                        blockMargin={5}
                        blockRadius={2}
                        colorScheme='light'
                        theme={explicitTheme}
                        showWeekdayLabels='true'
                        weekStart={1}
                        fontSize={16}
                    />
                </div>
            </div>
        </AboutStyled>
    )
};