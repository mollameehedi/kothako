import React from 'react'
import Image from '../Image'
import Button from '../Button'
import { HiDotsVertical } from 'react-icons/hi'

const Header = ({handleClick,src}) => {
  return (
    <div className='h-[10%]'>
      <div className='flex items-center border-b py-2'>
    <Image className='h-[55px] w-[55px] rounded-full mr-1' src={src}/>
    <div className='flex w-full items-center justify-between'>
        <div>
            <h4 className='text-sm text-secondary font-semibold font-poppins'>Mehedi</h4>
            <p className='text-xs text-[#4D4D4DBF] font-medium font-poppins'>Active</p>
        </div>
        <div className='text-right pr-2'>
        <Button handleClick={handleClick}><HiDotsVertical/></Button>
        </div>
    </div>
</div>
  </div>
  )
}

export default Header