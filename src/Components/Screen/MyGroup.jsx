import React from 'react'
import UserItem from '../Common/UserItem'
import Card from '../Common/Card'
import Avater from '../../assets/avater.jpg'
import { AiOutlineMessage } from 'react-icons/ai';
import Button from '../Common/Button';
import CardHeader from '../Common/CardHeader';
import CardBody from '../Common/Cardbody';
import { HiDotsVertical } from "react-icons/hi";

const MyGroups = () => {
    let handleClick = (e) =>{
        console.log(e);        
    }
  return (
    <>
    <Card>
    <CardHeader title="My Group">
            <Button><HiDotsVertical/></Button>
    </CardHeader>
       <CardBody  className='h-5/6 overflow-y-scroll custom-scrollbar'>
       <UserItem name="Buddy" subtitle='Hi Guys, Wassup!' src={Avater}>
           <Button handleClick={()=>handleClick(20)} className='btn-primary'><AiOutlineMessage/></Button>
        </UserItem>
       <UserItem name="Buddy" subtitle='Hi Guys, Wassup!' src={Avater}>
           <Button handleClick={()=>handleClick(20)} className='btn-primary'><AiOutlineMessage/></Button>
        </UserItem>
       <UserItem name="Buddy" subtitle='Hi Guys, Wassup!' src={Avater}>
           <Button handleClick={()=>handleClick(20)} className='btn-primary'><AiOutlineMessage/></Button>
        </UserItem>
       <UserItem name="Buddy" subtitle='Hi Guys, Wassup!' src={Avater}>
           <Button handleClick={()=>handleClick(20)} className='btn-primary'><AiOutlineMessage/></Button>
        </UserItem>
       </CardBody>
    </Card>
    </>
  )
}

export default MyGroups