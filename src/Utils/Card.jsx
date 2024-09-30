import React from 'react'


const Card = ({children}) => {
  return (
    <div className='rounded-[20px] shadow-xl p-5 h-full flex flex-col'>
           {children}
    </div>
  )
}

export default Card

// box-shadow: 0px 4px 4px 0px #00000040;
