import React from 'react'
import ChatList from '../Components/ChatList'
import ChatBox from '../Components/ChatBox'

const Message = () => {
  return (
    <div className='flex h-full'>
      <div className='w-5/12'>
      <ChatList/>
      </div>
      <div className='w-7/12 h-full'>
      <ChatBox/>
        
      </div>
    </div>
  )
}

export default Message