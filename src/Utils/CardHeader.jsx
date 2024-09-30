import React from 'react'

const CardHeader = ({title,className,children}) => {
  return (
    <div className='py-3 text-xl text-secondary font- font-poppins font-semibold flex justify-between'>
         <h3 className={className}>{title}</h3>
         {children}
    </div>
  )
}

export default CardHeader