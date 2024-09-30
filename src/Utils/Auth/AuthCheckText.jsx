import React, { Children } from 'react'

const AuthCheckText = ({text,children }) => {
    
  return (
    <>
    <p className='text-sm text-secondary font-normal font-open-sans pt-8'>{text} {children }</p>
    </>
  )
}

export default AuthCheckText