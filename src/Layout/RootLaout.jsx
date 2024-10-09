import React from 'react'
import { Outlet } from "react-router-dom";
import SideBar from './SideBar';


const RootLaout = () => {
  return (
    <div className='flex w-full h-screen lg:overflow-hidden md:overflow-x-scroll font-poppins'>
      <div className='lg:w-1/12 md:w-2/12 w-2/12  h-full lg:p-4 md:p-2 sm:p-1 p-1'>
      <SideBar/>
    </div>
       <div className='lg:w-11/12 md:10/12 w-10/12 h-screen  lg:p-4 p-2'>
        <Outlet />
       </div>
    </div>
  )
}

export default RootLaout