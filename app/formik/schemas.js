// Schemas for Formik/Yup forms

import * as Yup from 'yup';

export const SignUpSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Minimum of two characters required')
    .required('Please enter your first name'),
  lastName: Yup.string()
    .min(2, 'Minimum of two characters required')
    .required('Please enter your last name'),
  email: Yup.string()
    .email('Invalid Email entered')
    .required('Please enter your email address'),
  phoneNo: Yup.string()
    .min(10, 'Please enter your 10-digit phone number (area code incl.)')
    .max(10, 'Please enter your 10-digit phone number (area code incl.)')
    .matches(/^[0-9]+$/, 'Must contain only digits')
    .required('Please enter your 10-digit phone number (area code incl.)'),
  password: Yup.string()
    .min(8)
    .required('Please enter a password for this account')
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
      'Must contain min. 8 characters, one uppercase letter, one lowercase letter, one number, and one special character.'  
    ),
  confirmPW: Yup.string()
   .min(8, 'Confirm password must be 8 characters long')
   .oneOf([Yup.ref('password')], 'Passwords do not match.')
   .required('Confirm password is required') 
});