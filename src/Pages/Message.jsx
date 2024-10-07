import React from 'react'
import ChatList from '../Components/Screen/ChatList'
import ChatBox from '../Components/Screen/ChatBox'

const Message = () => {
  return (
    <div className='flex h-full'>
      <div className='w-5/12 h-full'>
      <ChatList/>
      </div>
      <div className='w-7/12 h-full'>
      <ChatBox/>
        
      </div>
    </div>
  )
}

export default Message