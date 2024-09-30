import React from 'react'
import UserItem from '../Utils/UserItem'
import Card from '../Utils/Card'
import Avater from '../assets/avater.jpg'
import Text from '../Utils/Text'
import Button from '../Utils/Button';
import CardHeader from '../Utils/CardHeader';
import CardBody from '../Utils/Cardbody';
import { HiDotsVertical } from "react-icons/hi";

const Friends = () => {
  return (
    <Card>
    <CardHeader title="Friend List">
            <Button><HiDotsVertical/></Button>
    </CardHeader>
    <CardBody className='h-5/6 overflow-y-scroll custom-scrollbar'>
    <UserItem  src={Avater}>
            <Text text="Today, 8:56pm" className="text-xs text-[#4D4D4DBF] font-medium font-poppins text-right"/>
        </UserItem>
        <UserItem src={Avater}>
            <Text text="Today, 8:56pm" className="text-xs text-[#4D4D4DBF] font-medium font-poppins text-right"/>
        </UserItem>
        <UserItem src={Avater}>
            <Text text="Today, 8:56pm" className="text-xs text-[#4D4D4DBF] font-medium font-poppins text-right"/>
        </UserItem>
        <UserItem src={Avater}>
            <Text text="Today, 8:56pm" className="text-xs text-[#4D4D4DBF] font-medium font-poppins text-right"/>
        </UserItem>
        <UserItem src={Avater}>
            <Text text="Today, 8:56pm" className="text-xs text-[#4D4D4DBF] font-medium font-poppins text-right"/>
        </UserItem>
        </CardBody>
    </Card>
  )
}

export default Friends