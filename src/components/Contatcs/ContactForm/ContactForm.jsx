import { ContactFormStyled } from "./ContactForm.styled";
import {ReactComponent as UserIcon} from "../../../images/svg-icons/user.svg";
import {ReactComponent as EmailIcon} from "../../../images/svg-icons/contact.svg";
import {ReactComponent as SubjectIcon} from "../../../images/svg-icons/skills.svg";
import {ReactComponent as CheckedIcon} from "../../../images/svg-icons/check.svg";
import {ReactComponent as CheckBoxIcon} from "../../../images/svg-icons/rectangle.svg";
import { useFormik } from "formik";
import { ContactFormSchema } from "../../../utils/ValidationSchema";
import { ShowRules } from "../../../utils/ShowRules";
import { useState, useEffect } from "react";
import emailjs from '@emailjs/browser';
import { openLoader, closeLoader } from "../../../redux/Data/data-slice";
import { setSuccsessTrue, setSuccsessFalse, openModalContact } from "../../../redux/Modal/modal-slice";
import { useDispatch } from "react-redux";


const SERVICE_ID = 'service_c66ogc6';
const TEMPLATE_ID = 'template_r2jcm2g';
const PUBLIC_KEY = 'acQGHeSWb2XDF5MDI';


export const ContactForm = () => {
    const dispatch = useDispatch();

    const [formChanged, setFormChanged] = useState(false);
    const {
        values,
        errors,
        touched,
        isValid,
        handleBlur,
        handleChange,
        handleSubmit,
        resetForm,
      } = useFormik({

        initialValues: {
            name: '',
            email: '',
            subject: '',
            user_comment: '',
            user_agreement: false,
        },

        validationSchema: ContactFormSchema,

        onSubmit: (values) => {
            dispatch(openLoader());
            emailjs.send(SERVICE_ID, TEMPLATE_ID, {
                from_name: values.name,
                to_name: 'Oleg',
                from_email: values.email,
                to_email: 'okoshevy@gmail.com',
                subject: values.subject,
                message: values.user_comment
            }, PUBLIC_KEY)
            .then(() => {
                dispatch(closeLoader());
                dispatch(setSuccsessTrue());
                dispatch(openModalContact());
                setFormChanged(false);
                resetForm({
                    values: {
                        name: '',
                        email: '',
                        subject: '',
                        user_comment: '',
                        user_agreement: false
                    },
                })
                }, 
                (error) => {
                    dispatch(closeLoader());
                    dispatch(setSuccsessFalse());
                    dispatch(openModalContact());
                    console.error(error);
                }
            )
        },
    });


    const {
        getInputClass,
        getInputAlert,
    } = ShowRules(values, touched, errors);


    useEffect(() => {
        if (
          values.name !== '' ||
          values.email !== '' ||
          values.subject !== '' ||
          values.user_agreement !== false
        ) {
            setFormChanged(true);
        } 
    },[values.email, values.name, values.subject, values.user_agreement]);


    return(
        <ContactFormStyled onSubmit={handleSubmit} data-netlify="true">
            <label className="form-label" htmlFor="name" style={{'--i': 0}}>Name
                <div className="form-group">
                    <input 
                        className={`form-field ${getInputClass("name")}`}
                        type="text" 
                        name="name"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        placeholder='Enter your name'
                        id='name'
                        autoComplete="on"
                        required
                        onChange={handleChange}
                        value={values.name}
                        onBlur={handleBlur}
                    />
                    {getInputAlert("name")}
                    <UserIcon className="form-icon" width={20} height={20}/>
                </div>
            </label>
            <label className="form-label" htmlFor="email" style={{'--i': 1}}>Email
                <div className="form-group">
                    <input 
                        className={`form-field ${getInputClass("email")}`}
                        type="email" 
                        name="email"
                        title=""
                        placeholder='Enter your email'
                        id='email'
                        autoComplete="on"
                        required
                        onChange={handleChange}
                        value={values.email}
                        onBlur={handleBlur}
                    />
                    {getInputAlert("email")}
                    <EmailIcon className="form-icon" width={20} height={20}/>
                </div>
            </label>
            <label className="form-label" htmlFor="subject" style={{'--i': 2}}>Subject
                <div className="form-group">
                    <input
                        className={`form-field ${getInputClass("subject")}`}
                        type="text" 
                        name="subject"
                        title=""
                        placeholder='Enter your subject'
                        id='subject'
                        autoComplete="off"
                        required
                        onChange={handleChange}
                        value={values.subject}
                        onBlur={handleBlur}
                    />
                    {getInputAlert("subject")}
                    <SubjectIcon className="form-icon" width={20} height={20}/>
                </div>
            </label>
            <label className="form-label" htmlFor="text" style={{'--i': 3}}>Your message
                <textarea 
                    className="form-comment" 
                    name="user_comment" 
                    id="user_comment" 
                    rows="6" 
                    placeholder="Text input"
                    onChange={handleChange}
                    value={values.user_comment}
                    onBlur={handleBlur}
                ></textarea>
            </label>
            <label className="form-label form-agreement" htmlFor="confirm">
                <input 
                    className="form-checkbox"
                    type="checkbox"
                    name="user_agreement"
                    id="user_agreement"
                    onChange={handleChange}
                    value={values.user_agreement}
                    onBlur={handleBlur}
                    checked={values.user_agreement === true}
                />
                <CheckBoxIcon className="custom-checkbox-before" width={18} height={18}/>
                <CheckedIcon className="custom-checkbox-after" width={18} height={18}/>
                <span className="form-desc">
                    Check to confirm your data
                </span> 
            </label>
            <div className="btn-cont">
                <button type="submit" className="submit-button"
                    disabled={!isValid || !formChanged}
                >Send
                </button>
            </div>
        </ContactFormStyled>
    )
};