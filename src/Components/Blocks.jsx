import React from 'react'
import UserItem from '../Utils/UserItem'
import Card from '../Utils/Card'
import Avater from '../assets/avater.jpg'
import { FaArrowRotateLeft } from "react-icons/fa6";
import { RiDeleteBinLine } from "react-icons/ri";
import Button from '../Utils/Button';
import CardHeader from '../Utils/CardHeader';
import CardBody from '../Utils/Cardbody';
import { HiDotsVertical } from "react-icons/hi";

const Blocks = () => {
    let handleClick = (e) =>{
        console.log(e);        
    }
  return (
    <>
    <Card>
    <CardHeader title="Block List">
            <Button><HiDotsVertical/></Button>
    </CardHeader>
    <CardBody className='h-5/6 overflow-y-scroll custom-scrollbar'>
    <UserItem name="Mehedi" subtitle='Developer' src={Avater}>
            <ul className='flex gap-1'>
                <li> <Button handleClick={()=>handleClick(20)} className='btn-success'><FaArrowRotateLeft /></Button> </li>
                <li> <Button handleClick={()=>handleClick(20)} className='btn-danger'><RiDeleteBinLine/></Button> </li>
            </ul>
        </UserItem>
        </CardBody>
    </Card>
    </>
  )
}

export default Blocks