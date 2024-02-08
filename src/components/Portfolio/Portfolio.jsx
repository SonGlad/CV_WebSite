import { PortfolioStyled } from "./Portfolio.styled";
// import BakgroundImg from "../../images/images/bg_image.jpg";



export const PortfolioSection = () => {


    return(
        <PortfolioStyled>
            <h1 className="potfolio-title"><span>My </span>Projects</h1>
            <ul className="filter-list">
                <li className="filter-item">
                    <button className="filter-button" type="button">All</button>
                </li>
                <li className="filter-item">
                    <button className="filter-button" type="button">Individual</button>
                </li>
                <li className="filter-item">
                    <button className="filter-button" type="button">Team</button>
                </li>
                <li className="filter-item">
                    <button className="filter-button" type="button">Early</button>
                </li>
            </ul>
            {/* <ul className="cols">
                <li className="col" ontouchstart="this.classList.toggle('hover');">
                    <div className="container">
                        <div className="front" style={{backgroundImage: `url(${BakgroundImg})`}}>
                            <div className="inner">
                                <p>Diligord</p>
                                <span>Lorem ipsum</span>
                            </div>
                        </div>
                        <div className="back">
                            <div className="inner">
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c</p>
                                <button type="button" className="open-button"></button>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="col" ontouchstart="this.classList.toggle('hover');">
                    <div className="container">
                        <div className="front" style={{backgroundImage: `url(${BakgroundImg})`}}>
                            <div className="inner">
                                <p>Diligord</p>
                                <span>Lorem ipsum</span>
                            </div>
                        </div>
                        <div className="back">
                            <div className="inner">
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c</p>
                                <button type="button" className="open-button"></button>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="col" ontouchstart="this.classList.toggle('hover');">
                    <div className="container">
                        <div className="front" style={{backgroundImage: `url(${BakgroundImg})`}}>
                            <div className="inner">
                                <p>Diligord</p>
                                <span>Lorem ipsum</span>
                            </div>
                        </div>
                        <div className="back">
                            <div className="inner">
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c</p>
                                <button type="button" className="open-button"></button>
                            </div>
                        </div>
                    </div>
                </li>
			</ul> */}
        </PortfolioStyled>
    )
};