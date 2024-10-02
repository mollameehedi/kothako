import React from 'react'
import Input from '../Utils/Input'
import { CiSearch } from "react-icons/ci";
import Card from '../Utils/Card';
import Avater from '../assets/avater.jpg'
import Button from '../Utils/Button';
import CardHeader from '../Utils/CardHeader';
import CardBody from '../Utils/Cardbody';
import { HiDotsVertical } from "react-icons/hi";
import UserItem from '../Utils/UserItem';

const ChatList = () => {
  let handleClick = (e) =>{
    console.log(e);
    
  }
  return (
    <div className='flex  flex-col h-full pr-3'>
      <div className='relative h-[8%] w-full'>
        <CiSearch className='absolute left-4 top-1/2 text-[20px] text-black translate-y-center' />
        <Input type='text' placeholder='search' className='shadow-custom rounded-lg w-full h-full p-5 pl-10 focus:outline-none' />
      </div>
      <div className="h-[46%]">
      <Card>
        <CardHeader title="Groups">
          <Button><HiDotsVertical /></Button>
        </CardHeader>
        <CardBody className='h-5/6 overflow-y-scroll custom-scrollbar'>
        <UserItem name="Buddy" subtitle='Hi Guys, Wassup!' src={Avater}/>
        <UserItem name="Buddy" subtitle='Hi Guys, Wassup!' src={Avater}/>
        <UserItem name="Buddy" subtitle='Hi Guys, Wassup!' src={Avater}/>
        <UserItem name="Buddy" subtitle='Hi Guys, Wassup!' src={Avater}/>
        <UserItem name="Buddy" subtitle='Hi Guys, Wassup!' src={Avater}/>
        </CardBody>
      </Card>
      </div>
    <div className="h-[46%]">
        
    <Card>
        <CardHeader title="Friends">
          <Button><HiDotsVertical /></Button>
        </CardHeader>
        <CardBody className='h-5/6 overflow-y-scroll custom-scrollbar'>
        <UserItem name="Hasina" subtitle='Hi Guys, Wassup!' src={Avater}/>
        <UserItem name="Hasina" subtitle='Hi Guys, Wassup!' src={Avater}/>
        <UserItem name="Hasina" subtitle='Hi Guys, Wassup!' src={Avater}/>
        <UserItem name="Khaleda" subtitle='Hi Guys, Wassup!' src={Avater}/>
        <UserItem name="Khaleda" subtitle='Hi Guys, Wassup!' src={Avater}/>
        <UserItem name="Khaleda" subtitle='Hi Guys, Wassup!' src={Avater}/>
        <UserItem name="Khaleda" subtitle='Hi Guys, Wassup!' src={Avater}/>
        </CardBody>

      </Card>
    </div>
    </div>
  )
}

export default ChatList