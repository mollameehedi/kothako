import React from 'react'

const AuthInput = ({type,className,placeholder,label}) => {
  return (
    <>
    <div className='relative mt-10'>
    <label className='absolute top-[-12px] left-11 bg-white left-5 inline-block px-2 text-[#11175D]/[70]'>{label}</label>
    <input type={type} placeholder={placeholder}  className='text-[#11175D] text-sm font-semibold font-open-sans rounded-lg border p-5 w-4/5'/>
    </div>
    </>
  )
}

export default AuthInput