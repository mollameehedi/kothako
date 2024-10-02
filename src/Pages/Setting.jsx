import React from 'react'
import Card from '../Utils/Card'
import CardHeader from '../Utils/CardHeader'
import CardBody from '../Utils/Cardbody'
import Avater from '../assets/avater.jpg'
import List from '../Utils/List'
import ListItem from '../Utils/ListItem'
import { CiEdit } from "react-icons/ci";
import UserProfile from '../Utils/Setting/UserProfile'
import { MdAddPhotoAlternate  ,MdHelpOutline   } from "react-icons/md";
import { BiSolidEditAlt } from "react-icons/bi";
import { FaCommentDots } from "react-icons/fa6";

import { FaKey } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { VscColorMode } from "react-icons/vsc";

const Setting = () => {
  return (
    <div className='w-full h-full flex'>
      <div className='w-1/2 pr-3'>
        <Card>
          <CardHeader title="Profile Settings" />
          <UserProfile name="Mehedi" subtitle='stay Home stay safe' src={Avater} />
          <List className="">
            <ListItem className='setting-list'> <BiSolidEditAlt className='mr-3  text-xl' /> Edit Profile Name.</ListItem>
            <ListItem className='setting-list'> <FaCommentDots  className='mr-3 text-xl' /> Edit Profile Status Info..</ListItem>
            <ListItem className='setting-list'> <MdAddPhotoAlternate  className='mr-3 text-xl' /> Edit Profile Photo.</ListItem>
            <ListItem className='setting-list'> <MdHelpOutline   className='mr-3 text-xl' /> Help.</ListItem>
          </List>
        </Card>
      </div>
      <div className='w-1/2 pl-3'>
        <Card>
          <CardHeader title="Account Settings" />
          <CardBody>
          <List className="">
            <ListItem className='setting-list'> <FaKey className='mr-3  text-xl ' />   Password</ListItem>
            <ListItem className='setting-list'> <VscColorMode  className='mr-3 text-xl' /> Theme.</ListItem>
            <ListItem className='setting-list'> <RiDeleteBin6Fill  className='mr-3 text-xl' /> Delete Account.</ListItem>
          </List>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}

export default Setting