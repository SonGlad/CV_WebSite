import { AboutStyled } from "./About.styled";
import { LeftAnimation } from "./LeftAnimation/LeftAnimation";
// import { RightAnimation } from "./RightAnimation/RightAnimation";
import MyPicture from "../../images/images/my_photo_2.png";
import profile from "../../utils/profile.json";



export const AboutSection = () => {
    const { about1, about2 } = profile;


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
                {/* <div className="coding-container-right">
                    <RightAnimation/>
                </div> */}
            </div>
            <div className="professional-cont">
                <h2 className="professional-title">Professional <span>Skillset</span></h2>
                <ul className="professional-list">
                    <li className="professional-item">

                    </li>
                    <li className="professional-item">

                    </li>
                    <li className="professional-item">

                    </li>
                    <li className="professional-item">

                    </li>
                    <li className="professional-item">

                    </li>
                </ul>
            </div>
            <div className="github-cont">
                <h2 className="github-title">Days I <span>Code</span></h2>
                <div className="github-data">

                </div>
            </div>
        </AboutStyled>
    )
};