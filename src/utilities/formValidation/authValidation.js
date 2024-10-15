import * as Yup from 'yup';

const emailRegex = /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/;

export const signupValidation = Yup.object({
    full_name:Yup.string()
        .max(25,'Must be 15 characters or less')
        .min(5,'Must be 5 characters or up')
        .required('Please Enter Your full name'),
    
    email:Yup.string()
        .matches(emailRegex,  "Only Email allowed")
        .min(5,'Must be 5 characters or up')
        .required('Please Enter Email'),
    
    password:Yup.string()
        .required('Please Enter Your Password')
        .min(6,'Must be 6 characters or up')
})