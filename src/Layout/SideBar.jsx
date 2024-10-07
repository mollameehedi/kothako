import React from 'react'
import Image from '../Components/Common/Image'
import Avater from '../assets/avater.jpg';
import Text from '../Components/Common/Text';
import { NavLink } from "react-router-dom";
import { AiOutlineMessage,AiOutlineHome } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { HiOutlineCog6Tooth } from "react-icons/hi2";
import { IoLogOutOutline } from "react-icons/io5";
import SideItem from '../Components/Common/SidBar/SideItem';

const SideBar = () => {
  return (
    <div className='w-full h-full flex flex-col bg-primary rounded-xl'>
        <div className='h-[20%] w-full flex justify-center items-center'>
            <div className='text-center'>
            <Image src={Avater} className='w-[70px] h-[70px] rounded-full'/>
            <Text text='Mehedi' className='text-white'/>
            </div>
        </div>
        <div className='h-[70%] w-full'>
          <ul className='flex flex-col items-center h-full'>
            <SideItem link='/'><AiOutlineHome className='z-10'/></SideItem>
            <SideItem link='/message'><AiOutlineMessage className='z-10'/></SideItem>
            <SideItem link='/notification'><IoMdNotificationsOutline className='z-10'/></SideItem>
            <SideItem link='/settings'><HiOutlineCog6Tooth className='z-10'/></SideItem>
          </ul>
        </div>
        <div className='h-[10%] w-full  text-center flex justify-center'>
            <NavLink to="/" className='text-4xl text-white inline-block]'> <IoLogOutOutline/> </NavLink>

        </div>
    </div>
  )
}

export default SideBar