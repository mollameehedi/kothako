import React from 'react'
import Text from '../Text'

const RightSingleMessage = ({message,date}) => {
  return (
  <>
    <div className='py-2 text-right'>
         <Text text={message} className='sing_message pr-10 pl-4 poligon_msg text-white bg-primary  right_poligon_msg'/>
         <Text text={date} className='text-black/[25%] text-xs font-medium font-poppins pt-2 text-right'/>
    </div>
  </>
  )
}

export default RightSingleMessage