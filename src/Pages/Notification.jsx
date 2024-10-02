import React from 'react'
import { CiSearch } from 'react-icons/ci'
import Input from '../Utils/Input'
import Notifications from '../Components/Notifications'


const Notification = () => {
  return (
    <div className='flex flex-col h-full'>
      <div className='relative h-[8%] w-full'>
        <CiSearch className='absolute left-4 top-1/2 text-[20px] text-black translate-y-center' />
        <Input type='text' placeholder='search' className='shadow-custom rounded-lg w-full h-full p-5 pl-10 focus:outline-none' />
      </div>
      <Notifications/>
    </div>
  )
}

export default Notification