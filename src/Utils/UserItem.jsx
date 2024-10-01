import React from 'react'
import Image from './Image'

const UserItem = ({src,children,handleClick}) => {
  return (
    <div onClick={handleClick} className='flex items-center border-b py-2'>
    <Image className='h-[55px] w-[55px] rounded-full mr-1' src={src}/>
    <div className='flex w-full items-center justify-between'>
        <div>
            <h4 className='text-sm text-secondary font-semibold font-poppins'>Mehedi</h4>
            <p className='text-xs text-[#4D4D4DBF] font-medium font-poppins'>Hi,Guy,s Wassup</p>
        </div>
        <div className='text-right pr-2'>
        {children}
        </div>
    </div>
</div>
  )
}

export default UserItem