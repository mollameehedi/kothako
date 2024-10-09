import React from 'react'
import Text from '../Text'
import { FaRegBell } from "react-icons/fa";

const NotificationItem = ({text}) => {
  return (
    <div className='relative'>
            <Text className='text-base text-black font-medium border-b-2 lg:pl-14 pl-12  lg:py-6 py-3'  text={text}/>
            <FaRegBell className='absolute left-2 top-2/4 translate-y-center text-xl text-black'/>
   </div>
  )
}

export default NotificationItem