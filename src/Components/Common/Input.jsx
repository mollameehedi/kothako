import React from 'react'

const Input = ({type,className,name,handleChange,placeholder}) => {
  return (
    <>
    <input type={type} placeholder={placeholder} onChange={handleChange}  name={name} className={className}/>
    </>
  )
}

export default Input