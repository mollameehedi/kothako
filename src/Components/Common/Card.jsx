import React from 'react'


const Card = ({children}) => {
  return (
    <div className='rounded-lg shadow-custom md:p-5 p-3 h-full flex flex-col'>
           {children}
    </div>
  )
}

export default Card

