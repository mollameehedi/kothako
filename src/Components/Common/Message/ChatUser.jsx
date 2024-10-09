import React from 'react'
import Image from '../Image';
import Text from '../Text';

const ChatUser = ({name,subtitle,src,children,handleClick,className}) => {
  return (
    <div onClick={handleClick} className='flex items-center border-b py-2'>
    <Image className='h-[55px] w-[55px] rounded-full mr-1' src={src}/>
    <div className='lg:flex hidden  w-full items-center justify-between'>
        <div className='text-sm text-secondary font-semibold font-poppins'>
            <h4 className={className}>{name}</h4>
            <Text text={subtitle} className='text-xs text-[#4D4D4DBF] font-medium font-poppins'/>
        </div>
        <div className='text-right pr-2'>
        {children}
        </div>
    </div>
</div>
  )
}

export default ChatUser