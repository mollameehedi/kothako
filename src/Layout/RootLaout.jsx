import React from 'react'
import { Outlet } from "react-router-dom";
import SideBar from './SideBar';


const RootLaout = () => {
  return (
    <div className='flex w-full h-screen lg:overflow-hidden md:overflow-x-scroll font-poppins'>
      <div className='lg:w-1/12 md:2/12 h-full p-4 md:p-2'>
      <SideBar/>
    </div>
       <div className='lg:w-11/12 md:10/12 h-screen  p-4'>
        <Outlet />
       </div>
    </div>
  )
}

export default RootLaout