import React from 'react'
import { NavLink } from "react-router-dom";

const SideItem = ({link,children}) => {
  return (
    <li className='w-full text-center'>
        <NavLink className='sidebar-item' to={link}>{children} </NavLink>
    </li>
  )
}

export default SideItem