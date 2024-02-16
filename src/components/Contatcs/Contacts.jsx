import { ContactsStyled } from "./Contacts.styled";
import { ContactInfo } from "./ContactInfo/ContactInfo";
import { ContactForm } from "./ContactForm/ContactForm";


export const Contacts = () => {


    return(
        <ContactsStyled>
            <h1 className="about-title">Contact <span>Me</span></h1>
            <div className="content-container">
                <ContactInfo/>
                <div className="form-container">
                    <ContactForm/>
                </div>
            </div>
        </ContactsStyled>
    )
};