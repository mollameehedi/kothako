import React from 'react'
import Card from '../Common/Card'
import UserItem from '../Common/UserItem'
import Button from '../Common/Button'
import Avater from '../../assets/avater.jpg'
import Input from '../Common/Input'
import { IoIosSend } from "react-icons/io";
import Header from '../Common/Message/Header'

import LeftSingleMessage from '../Common/Message/LeftSingleMessage'
import RightSingleMessage from '../Common/Message/RightSingleMessage'

const ChatBox = () => {
  return (
    <Card className="h-full flex flex-col justify-between w-full">
      <Header src={Avater}/>
      <div className='h-[80%] w-full overflow-y-scroll custom-scrollbar'>
       <LeftSingleMessage message='Hello, Need a Website can you help me' date='Today, 2:13pm'/>
       <RightSingleMessage message='Hello, Need a Website can you help me' date='Today, 2:13pm'/>
       <LeftSingleMessage message='Hello, Need a Website can you help me' date='Today, 2:13pm'/>
       <RightSingleMessage message='Hello, Need a Website can you help me' date='Today, 2:13pm'/>
       <LeftSingleMessage message='Hello, Need a Website can you help me' date='Today, 2:13pm'/>
       <RightSingleMessage message='Hello, Need a Website can you help me' date='Today, 2:13pm'/>
       <RightSingleMessage message='Hello, Need a Website can you help me' date='Today, 2:13pm'/>
       <LeftSingleMessage message='Hello, Need a Website can you help me' date='Today, 2:13pm'/>
      </div>
      <div  className='h-[10%] flex items-center border-t-2 pt-4'>
        <Input type='text' className='p-2 shadow-custom w-full bg-[#F1F1F1] rounded-xl' placeholder='' />
        <Button type='text' className='text-xl font-poppins font-semibold text-white bg-primary p-2 rounded-lg ml-4'><IoIosSend/></Button>
      </div>
    </Card>
  )
}

export default ChatBox