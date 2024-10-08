import React from 'react'
import UserItem from '../Common/UserItem'
import Card from '../Common/Card'
import Avater from '../../assets/avater.jpg'
import { FaPlus } from "react-icons/fa6";
import Button from '../Common/Button';
import CardHeader from '../Common/CardHeader';
import CardBody from '../Common/Cardbody';
import { HiDotsVertical } from "react-icons/hi";

const Users = () => {
    let handleClick = (e) =>{
        console.log(e);        
    }
  return (
    <>
    <Card>
    <CardHeader title="User List">
            <Button><HiDotsVertical/></Button>
    </CardHeader>
        <CardBody className='h-5/6 overflow-y-scroll custom-scrollbar'>
        <UserItem name="Mehedi" subtitle='Developer' src={Avater}>
           <Button handleClick={()=>handleClick(20)} className='btn-primary'><FaPlus/></Button>
        </UserItem>
        <UserItem name="Mehedi" subtitle='Developer' src={Avater}>
           <Button handleClick={()=>handleClick(20)} className='btn-primary'><FaPlus/></Button>
        </UserItem>
        <UserItem name="Mehedi" subtitle='Developer' src={Avater}>
           <Button handleClick={()=>handleClick(20)} className='btn-primary'><FaPlus/></Button>
        </UserItem>
        <UserItem name="Mehedi" subtitle='Developer' src={Avater}>
           <Button handleClick={()=>handleClick(20)} className='btn-primary'><FaPlus/></Button>
        </UserItem>
        <UserItem name="Mehedi" subtitle='Developer' src={Avater}>
           <Button handleClick={()=>handleClick(20)} className='btn-primary'><FaPlus/></Button>
        </UserItem>
        </CardBody>
    </Card>
    </>
  )
}

export default Users