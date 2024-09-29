import React from 'react'
import signInImage from '../assets/signin.jpg';
import Image from '../Utils/Image';
import AuthHeader from '../Utils/Auth/AuthHeader';
import Text from '../Utils/Text';
import AuthInput from '../Utils/Auth/AuthInput';
import AuthButton from '../Utils/Auth/AuthButton';
import { Link } from 'react-router-dom';
import AuthCheckText from '../Utils/Auth/AuthCheckText';

const SignIn = () => {
  return (
    <div className='w-full h-screen'>
    <div className='flex w-100 h-full justify-between'>
        <div className='w-2/4 h-full flex justify-center items-center'>
          <div className='w-4/5'>
          <AuthHeader title='Login to your account!'/>
          <Text className='text-xl text-black font-normal font-open-sans pb-4 opacity-50 pt-3' text='Free register and you can enjoy it'/>
          <AuthInput placeholder='Enter Your Email Address' type='email'label="Email Address"/>
          <AuthInput placeholder='Enter Your Email Address' type='password'label="Password"/>
          <AuthButton text="Sign Up" type='submit'/>
          <AuthCheckText text='Login to Continue ?' >
              <Link className='text-[#EA6C00]' to='/signup'> Sign Up</Link>
            </AuthCheckText>
          </div>
        </div>
        <div className='w-2/4 bg-emerald-600'>
          <Image className='w-full h-full object-cover ' src={signInImage}/>
        </div>
    </div>
  </div>
  )
}

export default SignIn