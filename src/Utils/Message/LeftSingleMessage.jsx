import React from 'react'
import Text from '../Text'

const LeftSingleMessage = ({message,date}) => {
  return (
  <>
    <div className='py-2'>
         <Text text={message} className='sing_message pl-10 pr-4 poligon_msg bg-[#F1F1F1] left_poligon_msg  '/>
         <Text text={date} className='text-black/[25%] text-xs font-medium font-poppins pt-2'/>
    </div>
  </>
  )
}

export default LeftSingleMessage