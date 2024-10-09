import React from 'react'
import Text from '../Text'

const LeftSingleMessage = ({message,date}) => {
  return (
  <>
    <div className='py-2'>
         <Text text={message} className='sing_message lg:pl-10 pl-5 lg:pr-4 pr-2 poligon_msg bg-[#F1F1F1] left_poligon_msg  '/>
         <Text text={date} className='text-black/[25%] text-xs font-medium font-poppins pt-2'/>
    </div>
  </>
  )
}

export default LeftSingleMessage