import React from 'react'
import { Outlet } from "react-router-dom";
import SideBar from './SideBar';


const RootLaout = () => {
  return (
    <div className='flex w-full h-screen overflow-hidden'>
      <div className='w-2/12 h-full'>
      <SideBar/>
    </div>
       <div className='w-10/12 bg-red-600 h-screen'>
        <Outlet />
       </div>
    </div>
  )
}

export default RootLaout