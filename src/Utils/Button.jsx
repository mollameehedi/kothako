import React from 'react'

const Button = ({type,className,handleClick,children}) => {
  return (
    <button type={type} className={className} onClick={handleClick}>{children}</button>
  )
}

export default Button