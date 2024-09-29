import React, { Children } from 'react'

const AuthCheckText = ({text,children }) => {
    
  return (
    <>
    <p className='text-sm text-[#03014C] font-normal font-open-sans pt-8'>{text} {children }</p>
    </>
  )
}

export default AuthCheckText