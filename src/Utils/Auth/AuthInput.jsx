import React from 'react'
import Input from '../Input'

const AuthInput = ({type,placeholder,label}) => {
  return (
    <>
    <div className='relative mt-10'>
    <label className='absolute top-[-12px] left-8 bg-white inline-block px-2 text-[#11175D]/[70]'>{label}</label>
    <Input  type={type} placeholder={placeholder}  className='text-secondary text-sm font-semibold font-open-sans rounded-lg border p-5 w-4/5'/>
  </div>
    </>
  )
}

export default AuthInput