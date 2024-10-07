import React from 'react'
import signUpImage from '../assets/signup.jpg';
import Image from '../Components/Common/Image';
import AuthHeader from '../Components/Common/Auth/AuthHeader';
import Text from '../Components/Common/Text';
import AuthInput from '../Components/Common/Auth/AuthInput';
import AuthButton from '../Components/Common/Auth/AuthButton';
import { Link } from 'react-router-dom';
import AuthCheckText from '../Components/Common/Auth/AuthCheckText';

const SignIn = () => {
  return (
    <div className='w-full h-screen'>
      <div className='flex w-100 h-full justify-between'>
          <div className='w-2/4 h-full flex justify-center items-center'>
            <div className='w-4/5'>
            <AuthHeader title='Get started with easily register'/>
            <Text className='text-xl text-black font-normal font-open-sans pb-4 opacity-50 pt-3' text='Free register and you can enjoy it'/>
            <AuthInput placeholder='Enter Your Email Address' type='email'label="Email Address"/>
            <AuthInput placeholder='Enter Your Email Address' type='text'label="Full name"/>
            <AuthInput placeholder='Enter Your Email Address' type='password'label="Password"/>
            <AuthButton text="Sign Up" type='submit'/>
            <AuthCheckText text='Already have an account ?' >
                <Link className='text-[#EA6C00]' to='/signin'> Sign In</Link>
              </AuthCheckText>
            </div>
          </div>
          <div className='w-2/4 bg-emerald-600'>
            <Image className='w-full h-full object-cover ' src={signUpImage}/>
          </div>
      </div>
    </div>
  )
}

export default SignIn