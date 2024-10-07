import React from 'react'
import Text from '../Text'
import Image from '../Image'

const UserProfile = ({name,subtitle,src}) => {
  return (
    <div className='flex items-center border-b py-2'>
    <Image className='h-[70px] w-[70px] rounded-full mr-1' src={src}/>
    <div className='flex w-full items-center justify-between'>
        <div className='text-sm text-secondary font-semibold font-poppins'>
            <h4 className='text-2xl'>{name}</h4>
            <Text className='text-xs text-[#4D4D4DBF] font-medium font-poppins' text={subtitle}/>
        </div>
    </div>
</div>
  )
}

export default UserProfile