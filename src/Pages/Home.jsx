import React from 'react'
import Friends from '../Components/Friends'

const Home = () => {
  return (
    <div className='flex flex-wrap h-full p-4 justify-around'>
      <div className='w-4/12  h-3/6 px-3'>
      <Friends/>
      </div>
      <div className='w-4/12  h-3/6  px-3'>
      <Friends/>
      </div>
      <div className='w-4/12  h-3/6  px-3'>
      <Friends/>
      </div>
      <div className='w-4/12  h-3/6  px-3'>
      <Friends/>
      </div>
      <div className='w-4/12  h-3/6  px-3'>
      <Friends/>
      </div>
      <div className='w-4/12  h-3/6  px-3'>
      <Friends/>
      </div>
    </div>
  )
}

export default Home