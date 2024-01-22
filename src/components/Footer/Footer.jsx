import { FooterStyled } from "./Footer.styled";
import { Container } from "../Container/Container";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logoicon } from "../../images/svg-icons/banner.svg";
import { ReactComponent as GitIcon } from "../../images/svg-icons/github.svg";
import { ReactComponent as FacebookIcon } from "../../images/svg-icons/facebook.svg";
import { ReactComponent as TelegramIcon } from "../../images/svg-icons/telegram.svg";
import { ReactComponent as LinkedinIcon } from "../../images/svg-icons/linkedin.svg";
import Logo from "../../images/images/iReX_logo.png";
import { useCallback, useEffect, useRef, useState } from "react";




export const Footer = () => {
    const [footerPicture, setFooterPicture] = useState(false);
    const contRef = useRef();


    const toggleFooterPicture = () => {
        setFooterPicture(!footerPicture);
    };


    const classForFooterPicture = () => {
        return footerPicture ? 'img-active' : ''
    };
    const stopPropagation = (event) => {
        event.stopPropagation();
    };



    const handleKeyPress = useCallback(event => {
        if (event.key === 'Escape') {
        setFooterPicture(false);
        }
    },[]);


    const handleBackgroundClick = useCallback(event => {
        if(contRef.current && !contRef.current.contains(event.target)) {
            setFooterPicture(false);
        } 
    },[]); 


    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);
        document.addEventListener('click', handleBackgroundClick);

        return () => {
        document.removeEventListener('keydown', handleKeyPress);
        document.removeEventListener('click', handleBackgroundClick);
        };
    },[handleBackgroundClick, handleKeyPress]);



    return (
        <FooterStyled>
            <Container>
                <div className="footer-container">
                    <div className="footer-left-cont order-one">
                        <p className="footer-text">Designed & Developed by</p>
                        <NavLink className="footer-link" to="/">
                            <p>Oleg Koshevy</p>
                            <Logoicon className="footer-logo" width={24} height={24}/>
                        </NavLink>
                    </div>
                    <div className="footer-center-cont order-two" onClick={stopPropagation}>
                        <p className="footer-text-center">Copyright<span> &#169; </span>2024</p>
                        <div className="cont-for-foo-pic" onClick={toggleFooterPicture} ref={contRef}>
                            <img className={`footer-img ${classForFooterPicture()}`} src={Logo} alt="irex_logo"/>
                        </div>
                    </div>
                    <div className="footer-right-cont order-three">
                        <p className="footer-text-right">Find me on:</p>
                        <ul className="footer-social-list">
                            <li className="footer-social-item">
                                <NavLink className="footer-social-link" to='https://github.com/SonGlad'
                                    aria-label="Github link"
                                    target="_blank"
                                    rel="noreferrer noopener">
                                    <GitIcon className="footer-icon" width={22} height={22}/>
                                </NavLink>
                            </li>
                            <li className="footer-social-item">
                                <NavLink className="footer-social-link" to='https://www.facebook.com/profile.php?id=100024930558745'
                                    aria-label="Facebook link"
                                    target="_blank"
                                    rel="noreferrer noopener">
                                    <FacebookIcon className="footer-icon" width={22} height={22}/>
                                </NavLink>
                            </li>
                            <li className="footer-social-item">
                                <NavLink className="footer-social-link" to='https://www.linkedin.com/in/oleg-koshevy/'
                                    aria-label="Linkedin link"
                                    target="_blank"
                                    rel="noreferrer noopener">
                                    <LinkedinIcon className="footer-icon" width={20} height={20}/>
                                </NavLink>
                            </li>
                            <li className="footer-social-item">
                                <NavLink className="footer-social-link" to='https://t.me/SonGlad'
                                    aria-label="Telegram link"
                                    target="_blank"
                                    rel="noreferrer noopener">
                                    <TelegramIcon className="footer-icon" width={20} height={20}/>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
        </FooterStyled>
    )
};