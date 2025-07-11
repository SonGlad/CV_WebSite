import { ContactInfoStyled } from "./ContactInfo.styled";
import { NavLink } from "react-router-dom";
import { ReactComponent as GitIcon } from "../../../images/svg-icons/github.svg";
import { ReactComponent as FacebookIcon } from "../../../images/svg-icons/facebook.svg";
import { ReactComponent as TelegramIcon } from "../../../images/svg-icons/telegram.svg";
import { ReactComponent as LinkedinIcon } from "../../../images/svg-icons/linkedin.svg";
import { ReactComponent as DiscordIcon } from "../../../images/svg-icons/discord.svg";
import {ReactComponent as PhoneIcon} from "../../../images/svg-icons/phone.svg";
import {ReactComponent as EmailIcon} from "../../../images/svg-icons/contact.svg";
import Profile from "../../../utils/profile.json";


export const ContactInfo = () => {
    const {
        // github_link, 
        // facebook_link, 
        // linkedin_link, 
        // telegram_link,
        // discord_link, 
        // download_link,
        // phone,
        // email,
        about4,
    } = Profile;


    return(
        <ContactInfoStyled>
            <h2 className="container-title">Let's Work Together</h2>
            <p className="contact-description">{about4}</p>
            <address className="page-contact">
                <ul className="contact-links">
                    <li className="contact-link-mail">
                        <NavLink className="contact-link" to="#">
                            {/* mailto:okoshevy@gmail.com */}
                            <EmailIcon className="contact-icon" width={18} height={18}/>
                            <span>testtest@gmail.com</span>
                        </NavLink>
                    </li>
                    <li className="contact-link-tel">
                        <NavLink className="contact-link" to="tel:#">
                            {/* tel:+30674838965 */}
                            <PhoneIcon className="contact-icon" width={18} height={18}/>
                            <span>+11 (000) 111-11-113221</span>
                        </NavLink>
                    </li>
                </ul>
            </address>
            <ul className="contact-social-list">
                <li className="contact-social-item">
                    <NavLink className="contact-social-link" to={"#"}
                        aria-label="Github link"
                        target="_blank"
                        rel="noreferrer noopener">
                        <GitIcon className="contact-social-icon" width={26} height={26}/>
                    </NavLink>
                </li>
                <li className="contact-social-item">
                    <NavLink className="contact-social-link" to={"#"}
                        aria-label="Facebook link"
                        target="_blank"
                        rel="noreferrer noopener">
                        <FacebookIcon className="contact-social-icon" width={26} height={26}/>
                    </NavLink>
                </li>
                <li className="contact-social-item">
                    <NavLink className="contact-social-link" to={"#"}
                        aria-label="Linkedin link"
                        target="_blank"
                        rel="noreferrer noopener">
                        <LinkedinIcon className="contact-social-icon" width={24} height={24}/>
                    </NavLink>
                </li>
                <li className="contact-social-item">
                    <NavLink className="contact-social-link" to={"#"}
                        aria-label="Telegram link"
                        target="_blank"
                        rel="noreferrer noopener">
                        <TelegramIcon className="contact-social-icon" width={24} height={24}/>
                    </NavLink>
                </li>
                <li className="contact-social-item">
                    <NavLink className="contact-social-link" to={"#"}
                        aria-label="Discrod link"
                        target="_blank"
                        rel="noreferrer noopener">
                        <DiscordIcon className="contact-social-icon" width={24} height={24}/>
                    </NavLink>
                </li>
            </ul>
            <div className="redirect-cont">
                <NavLink className="redirect-link" to={"#"}
                    aria-label="CV Douwnload link"
                    target="_blank"
                    rel="noreferrer noopener"
                    >Download CV
                </NavLink>
            </div>
        </ContactInfoStyled>
    )
};