import React from 'react'
import ChatList from '../Components/Screen/ChatList'
import ChatBox from '../Components/Screen/ChatBox'

const Message = () => {
  return (
    <div className='flex h-full w-full'>
      <div className='lg:w-5/12 md:w-5/12 w-4/12 h-full'>
      <ChatList/>
      </div>
      <div className='lg:w-7/12 md:7/12  w-8/12 h-full'>
      <ChatBox/>
        
      </div>
    </div>
  )
}

export default Message