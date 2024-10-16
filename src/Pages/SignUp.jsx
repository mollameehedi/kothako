import React from 'react'
import signUpImage from '../assets/signup.jpg';
import Image from '../Components/Common/Image';
import AuthHeader from '../Components/Common/Auth/AuthHeader';
import Text from '../Components/Common/Text';
import AuthInput from '../Components/Common/Auth/AuthInput';
import AuthButton from '../Components/Common/Auth/AuthButton';
import { Link,useNavigate } from 'react-router-dom';
import AuthCheckText from '../Components/Common/Auth/AuthCheckText';
import { useFormik } from 'formik';
import Form from '../Components/Common/Form';
import authService from '../services/AuthService';
import {signupValidation,} from '../utilities/formValidation/authValidation'
import { routes } from '../router';


const SignUp = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      full_name:'',
      password:''
    },
    validationSchema:signupValidation,
    onSubmit: values => {
      authService.signup(values.email,values.password,values.full_name)
      .then(response => {
        console.log(response);
      })
      .catch(error =>{
        console.log(error);

      })
      
    },
  });
  return (
    <div className='w-full h-screen'>
      <div className='flex w-100 h-full justify-between'>
          <div className='w-2/4 h-full flex justify-center items-center'>
            <Form className='w-4/5' handleSubmit={formik.handleSubmit}>
            <AuthHeader title='Get started with easily register'/>
            <Text className='text-xl text-black font-normal font-open-sans pb-4 opacity-50 pt-3' text='Free register and you can enjoy it'/>
            <AuthInput placeholder='Enter Your Email Address' type='email'label="Email Address" name='email' handleChange={formik.handleChange} value={formik.values.email}/>
            {formik.touched.email && formik.errors.email ? (
         <div className='error-text'>{formik.errors.email}</div>
       ) : null}
            <AuthInput placeholder='Enter Your Email Address' type='text'label="Full name" name='full_name'  handleChange={formik.handleChange} value={formik.values.full_name}/>
            {formik.touched.full_name && formik.errors.full_name ? (
         <div className='error-text'>{formik.errors.full_name}</div>
       ) : null}
            <AuthInput placeholder='Enter Your Email Address' type='password' label="Password" name='password'  handleChange={formik.handleChange} value={formik.values.password} />
            {formik.touched.password && formik.errors.password ? (
         <div className='error-text '>{formik.errors.password}</div>
       ) : null}
            <AuthButton text="Sign Up" type='submit'/>
            <AuthCheckText text='Already have an account ?' >
                <Link className='text-[#EA6C00]' to='/signin'> Sign In</Link>
              </AuthCheckText>
            </Form>
          </div>
          <div className='w-2/4 bg-emerald-600'>
            <Image className='w-full h-full object-cover ' src={signUpImage}/>
          </div>
      </div>
    </div>
  )
}

export default SignUp