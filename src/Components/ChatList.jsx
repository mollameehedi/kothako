import React from 'react'
import Input from '../Utils/Input'
import { CiSearch } from "react-icons/ci";
import Card from '../Utils/Card';
import Button from '../Utils/Button';
import CardHeader from '../Utils/CardHeader';
import CardBody from '../Utils/Cardbody';
import { HiDotsVertical } from "react-icons/hi";

const ChatList = () => {
  return (
    <div className='flex  flex-col h-full pr-3'>
      <div className='relative h-1/6 w-full'>
        <CiSearch className='absolute left-2 top-3 text-xl text-black' />
        <Input type='text' placeholder='search' className='shadow-custom rounded-lg w-full' />
      </div>
      <Card className=" h-2.5/6">
        <CardHeader title="Groups">
          <Button><HiDotsVertical /></Button>
        </CardHeader>
        <CardBody className='h-5/6 overflow-y-scroll custom-scrollbar'>

        </CardBody>
      </Card>
      <Card className=" h-2.5/6">
        <CardHeader title="Friends">
          <Button><HiDotsVertical /></Button>
        </CardHeader>
        <CardBody className='h-5/6 overflow-y-scroll custom-scrollbar'>

        </CardBody>

      </Card>
    </div>
  )
}

export default ChatList