import React from 'react'

const Text = ({text,className}) => {
  return (
    <>
        <p className={className}>{text}</p>
    </>
  )
}

export default Text