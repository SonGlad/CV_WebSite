import { ContactFormStyled } from "./ContactForm.styled";
import {ReactComponent as UserIcon} from "../../../images/svg-icons/user.svg";
import {ReactComponent as EmailIcon} from "../../../images/svg-icons/contact.svg";
import {ReactComponent as SubjectIcon} from "../../../images/svg-icons/skills.svg";
import {ReactComponent as CheckedIcon} from "../../../images/svg-icons/check.svg";
import {ReactComponent as CheckBoxIcon} from "../../../images/svg-icons/rectangle.svg";


export const ContactForm = () => {


    return(
        <ContactFormStyled>
            <label className="form-label" htmlFor="name">Name
                <div className="form-group">
                    <input className="form-field"
                        type="text" 
                        name="name"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        placeholder='Enter your name'
                        id='name'
                        autocomplete="on"
                        // onChange={handleChange}
                        // value={values.name}
                        // onBlur={handleBlur}
                    />
                    <UserIcon className="form-icon" width={20} height={20}/>
                </div>
            </label>
            <label className="form-label" htmlFor="email">Email
                <div className="form-group">
                    <input className="form-field"
                        type="email" 
                        name="email"
                        title=""
                        required
                        placeholder='Enter your email'
                        id='name'
                        autocomplete="on"
                        // onChange={handleChange}
                        // value={values.name}
                        // onBlur={handleBlur}
                    />
                    <EmailIcon className="form-icon" width={20} height={20}/>
                </div>
            </label>
            <label className="form-label" htmlFor="subject">Subject
                <div className="form-group">
                    <input className="form-field"
                        type="text" 
                        name="subject"
                        title=""
                        required
                        placeholder='Enter your subject'
                        id='subject'
                        autocomplete="off"
                        // onChange={handleChange}
                        // value={values.name}
                        // onBlur={handleBlur}
                    />
                    <SubjectIcon className="form-icon" width={20} height={20}/>
                </div>
            </label>
            <label className="form-label" htmlFor="text">Your message
                <textarea class="form-comment" 
                    name="user_comment" 
                    id="user_comment" 
                    rows="6" 
                    placeholder="Text input"
                ></textarea>
            </label>
            <label className="form-label form-agreement" htmlFor="confirm">
                <input 
                    class="form-checkbox" 
                    type="checkbox" 
                    name="user_agreement" 
                    id="user_agreement"
                />
                <CheckBoxIcon className="custom-checkbox-before" width={18} height={18}/>
                <CheckedIcon className="custom-checkbox-after" width={18} height={18}/>
                <span class="form-desc">
                    Check to confirm your data
                </span> 
            </label>
            <div className="btn-cont">
                <button type="submit" className="submit-button">Send</button>
            </div>
        </ContactFormStyled>
    )
};