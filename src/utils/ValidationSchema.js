import * as Yup from "yup";


const ContactFormSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .matches(/^[A-Za-z\s]+$/, { message: 'Name can only contain letters and spaces', excludeEmptyString: true })
    .min(2, 'Name is too short')
    .max(40, 'Name is too long')
    .required("Name is required"),
  email: Yup.string()
    .trim()
    .matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, 'Invalid email')
    .email("Invalid email")
    .required("Email is required"),
  subject: Yup.string()
    .trim()
    .min(2, 'Subject is too short')
    .max(40, 'Subject is too long')
    .required("Subject is required"),
  user_agreement: Yup.boolean()
    .oneOf([true], 'You must accept the entered data')
    .required('You must accept the the entered data')
});


export {
  ContactFormSchema,
};
