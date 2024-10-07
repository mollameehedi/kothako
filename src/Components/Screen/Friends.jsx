import React from 'react'
import UserItem from '../Common/UserItem'
import Card from '../Common/Card'
import Avater from '../../assets/avater.jpg'
import Text from '../Common/Text'
import Button from '../Common/Button';
import CardHeader from '../Common/CardHeader';
import CardBody from '../Common/Cardbody';
import { HiDotsVertical } from "react-icons/hi";

const Friends = () => {
  return (
    <Card>
    <CardHeader title="My All Friends">
            <Button><HiDotsVertical/></Button>
    </CardHeader>
    
    <CardBody className='h-5/6 overflow-y-scroll custom-scrollbar'>
    <UserItem name="Mehedi" subtitle='Developer' src={Avater}>
            <Text text="Today, 8:56pm" className="text-xs text-[#4D4D4DBF] font-medium font-poppins text-right"/>
        </UserItem>
    <UserItem name="Mehedi" subtitle='Developer' src={Avater}>
            <Text text="Today, 8:56pm" className="text-xs text-[#4D4D4DBF] font-medium font-poppins text-right"/>
        </UserItem>
    <UserItem name="Mehedi" subtitle='Developer' src={Avater}>
            <Text text="Today, 8:56pm" className="text-xs text-[#4D4D4DBF] font-medium font-poppins text-right"/>
        </UserItem>
    <UserItem name="Mehedi" subtitle='Developer' src={Avater}>
            <Text text="Today, 8:56pm" className="text-xs text-[#4D4D4DBF] font-medium font-poppins text-right"/>
        </UserItem>
    <UserItem name="Mehedi" subtitle='Developer' src={Avater}>
            <Text text="Today, 8:56pm" className="text-xs text-[#4D4D4DBF] font-medium font-poppins text-right"/>
        </UserItem>
        </CardBody>
    </Card>
  )
}

export default Friends