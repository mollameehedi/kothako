import React from 'react'
import Text from '../Text'
import { FaRegBell } from "react-icons/fa";

const NotificationItem = ({text}) => {
  return (
    <div className='relative'>
            <Text className='text-base text-black font-medium border-b-2 pl-14  py-6'  text={text}/>
            <FaRegBell className='absolute left-2 top-2/4 translate-y-center text-xl text-black'/>
   </div>
  )
}

export default NotificationItem