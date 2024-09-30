import React from 'react'


const Card = ({title,children,className}) => {
  return (
    <div className='rounded-[20px] shadow-xl p-5 h-full flex flex-col'>
        <h3 className='py-6 text-xl text-secondary font- font-poppins font-semibold'>{title}</h3>
        <div  className={className}>
           {children}
        </div>
    </div>
  )
}

export default Card

// box-shadow: 0px 4px 4px 0px #00000040;
