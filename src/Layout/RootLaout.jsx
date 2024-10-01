import React from 'react'
import { Outlet } from "react-router-dom";
import SideBar from './SideBar';


const RootLaout = () => {
  return (
    <div className='flex w-full h-screen overflow-hidden'>
      <div className='w-1/12 h-full p-4'>
      <SideBar/>
    </div>
       <div className='w-11/12 h-screen  p-4'>
        <Outlet />
       </div>
    </div>
  )
}

export default RootLaout