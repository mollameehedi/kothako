import React from 'react'

const AuthButton = ({text,className,type}) => {
  return (
    <>
        <button type={type} className='text-white text-xl font-semibold font-open-sans leading-[65px] w-4/5 bg-[#11175D] rounded-[80px] mt-10'>{text}</button>
    </>
  )
}

export default AuthButton