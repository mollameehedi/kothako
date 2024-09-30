import React from 'react'


const Card = ({children}) => {
  return (
    <div className='rounded-[20px] shadow-custom p-5 h-full flex flex-col'>
           {children}
    </div>
  )
}

export default Card

