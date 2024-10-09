import React from 'react'
import Text from '../Text'

const RightSingleMessage = ({message,date}) => {
  return (
  <>
    <div className='py-2 text-right'>
         <Text text={message} className='sing_message :lg:pr-10 pr-5 lg:pl-4 pl-0 poligon_msg text-white bg-primary  right_poligon_msg'/>
         <Text text={date} className='text-black/[25%] text-xs font-medium font-poppins lg:pt-2 pt-1 text-right'/>
    </div>
  </>
  )
}

export default RightSingleMessage