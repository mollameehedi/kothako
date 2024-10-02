import React from 'react'
import UserItem from '../Utils/UserItem'
import Card from '../Utils/Card'
import Avater from '../assets/avater.jpg'
import { FaPlus } from "react-icons/fa6";
import Button from '../Utils/Button';
import CardHeader from '../Utils/CardHeader';
import CardBody from '../Utils/Cardbody';
import { HiDotsVertical } from "react-icons/hi";


const Groups = () => {
    let handleClick = (e) =>{
        console.log(e);        
    }
  return (
    <>
    <Card>
        <CardHeader  title="All Group">
            <Button><HiDotsVertical/></Button>
        </CardHeader>
        <CardBody  className='h-5/6 overflow-y-scroll custom-scrollbar'>
        <UserItem name="Mern 2308" subtitle='Hi Guys, Wassup!' src={Avater}>
           <Button handleClick={()=>handleClick(20)} className='btn-primary'><FaPlus/></Button>
        </UserItem>
        <UserItem name="Mern 2308" subtitle='Hi Guys, Wassup!' src={Avater}>
           <Button handleClick={()=>handleClick(20)} className='btn-primary'><FaPlus/></Button>
        </UserItem>
        <UserItem name="Mern 2308" subtitle='Hi Guys, Wassup!' src={Avater}>
           <Button handleClick={()=>handleClick(20)} className='btn-primary'><FaPlus/></Button>
        </UserItem>
        <UserItem name="Mern 2308" subtitle='Hi Guys, Wassup!' src={Avater}>
           <Button handleClick={()=>handleClick(20)} className='btn-primary'><FaPlus/></Button>
        </UserItem>
        <UserItem name="Mern 2308" subtitle='Hi Guys, Wassup!' src={Avater}>
           <Button handleClick={()=>handleClick(20)} className='btn-primary'><FaPlus/></Button>
        </UserItem>
        <UserItem name="Mern 2308" subtitle='Hi Guys, Wassup!' src={Avater}>
           <Button handleClick={()=>handleClick(20)} className='btn-primary'><FaPlus/></Button>
        </UserItem>
        <UserItem name="Mern 2308" subtitle='Hi Guys, Wassup!' src={Avater}>
           <Button handleClick={()=>handleClick(20)} className='btn-primary'><FaPlus/></Button>
        </UserItem>
        </CardBody>
    </Card>
    </>
  )
}

export default Groups