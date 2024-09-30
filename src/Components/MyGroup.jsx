import React from 'react'
import UserItem from '../Utils/UserItem'
import Card from '../Utils/Card'
import Avater from '../assets/avater.jpg'
import { AiOutlineMessage } from 'react-icons/ai';
import Button from '../Utils/Button';
import CardHeader from '../Utils/CardHeader';
import CardBody from '../Utils/Cardbody';
import { HiDotsVertical } from "react-icons/hi";

const MyGroups = () => {
    let handleClick = (e) =>{
        console.log(e);        
    }
  return (
    <>
    <Card>
    <CardHeader title="Block List">
            <Button><HiDotsVertical/></Button>
    </CardHeader>
       <CardBody  className='h-5/6 overflow-y-scroll custom-scrollbar'>
       <UserItem  src={Avater}>
           <Button handleClick={()=>handleClick(20)} className='btn-primary'><AiOutlineMessage/></Button>
        </UserItem>
       </CardBody>
    </Card>
    </>
  )
}

export default MyGroups