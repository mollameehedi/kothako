import React from 'react'
import UserItem from '../Utils/UserItem'
import Card from '../Utils/Card'
import Avater from '../assets/avater.jpg'
import { FaCheck,FaMinus } from "react-icons/fa6";
import Button from '../Utils/Button';
import CardHeader from '../Utils/CardHeader';
import CardBody from '../Utils/Cardbody';
import { HiDotsVertical } from "react-icons/hi";

const FriendRequest = () => {
    let handleClick = (e) =>{
        console.log(e);        
    }
  return (
    <>
    <Card>
    <CardHeader title="Friend Request" >
            <Button><HiDotsVertical/></Button>
    </CardHeader>
    <CardBody  className='h-5/6 overflow-y-scroll custom-scrollbar'>
    <UserItem  src={Avater}>
            <ul className='flex gap-1'>
                <li> <Button handleClick={()=>handleClick(20)} className='btn-success'><FaCheck/></Button> </li>
                <li> <Button handleClick={()=>handleClick(20)} className='btn-danger'><FaMinus/></Button> </li>
            </ul>
        </UserItem>
        <UserItem  src={Avater}>
            <ul className='flex gap-1'>
                <li> <Button handleClick={()=>handleClick(20)} className='btn-success'><FaCheck/></Button> </li>
                <li> <Button handleClick={()=>handleClick(20)} className='btn-danger'><FaMinus/></Button> </li>
            </ul>
        </UserItem>
        <UserItem  src={Avater}>
            <ul className='flex gap-1'>
                <li> <Button handleClick={()=>handleClick(20)} className='btn-success'><FaCheck/></Button> </li>
                <li> <Button handleClick={()=>handleClick(20)} className='btn-danger'><FaMinus/></Button> </li>
            </ul>
        </UserItem>
        <UserItem  src={Avater}>
            <ul className='flex gap-1'>
                <li> <Button handleClick={()=>handleClick(20)} className='btn-success'><FaCheck/></Button> </li>
                <li> <Button handleClick={()=>handleClick(20)} className='btn-danger'><FaMinus/></Button> </li>
            </ul>
        </UserItem>
        <UserItem  src={Avater}>
            <ul className='flex gap-1'>
                <li> <Button handleClick={()=>handleClick(20)} className='btn-success'><FaCheck/></Button> </li>
                <li> <Button handleClick={()=>handleClick(20)} className='btn-danger'><FaMinus/></Button> </li>
            </ul>
        </UserItem>
    </CardBody>
    </Card>
    </>
  )
}

export default FriendRequest