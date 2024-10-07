import React from 'react'

const ListItem = ({className,text,handleClick,children}) => {
  return (
    <li className={className} onClick={handleClick}>{text}{children}</li>
  )
}

export default ListItem