import { ContactModalStyled } from "./ContactModal.styled";
import { useModal } from "../../../hooks/useModal";
import {ReactComponent as CloseIcon} from "../../../images/svg-icons/close.svg";
import {ReactComponent as SuccsessIcon} from "../../../images/svg-icons/ok.svg";
import {ReactComponent as ErrorIcon} from "../../../images/svg-icons/error-logo.svg";



export const ContactModal = ({handleClickClose}) => {
    const {isSuccsess} = useModal();


    return(
        <ContactModalStyled>
            <button className="close-btn" type="button" onClick={handleClickClose}>
                <CloseIcon className="icon" width={12} height={12}/>
            </button>
            {isSuccsess ? (
                <div className="content-container">
                    <div className="shadow-div">
                        <div className="content">
                            <SuccsessIcon className="modal-icon" width={24} height={24}/>
                            <p className="contact-modal-text sucsess">Thank you for contact me!</p>
                        </div>
                        <p className="contact-modal-text">I will get back to you as soon as possible!</p>
                    </div>
                    <button type='button' className="continue-btn" onClick={handleClickClose}>Continue</button>
                </div>
            ):(
                <div className="content-container">
                    <div className="shadow-div">
                        <div className="content">
                            <ErrorIcon className="modal-icon" width={24} height={24}/>
                            <p className="contact-modal-text error">Oops... Something went wrong.</p>
                        </div>
                        <p className="contact-modal-text">Please try again later...</p>
                    </div>
                    <button type='button' className="continue-btn" onClick={handleClickClose}>Continue</button>
                </div>
            )}
        </ContactModalStyled>
    )
};