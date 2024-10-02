import React from 'react'
import Friends from '../Components/Friends'
import Users from '../Components/Users'
import FriendRequest from '../Components/FriendRequest'
import Blocks from '../Components/Blocks'
import Groups from '../Components/Groups'
import MyGroups from '../Components/MyGroup'


const Home = () => {
  return (
    <div className='flex flex-wrap h-full justify-around'>
      <div className='lg:w-4/12 md:w-6/6 sm:w-full  h-3/6 px-3'>
      <Groups/>
      </div>
      <div className='lg:w-4/12 md:w-6/6 sm:w-full h-3/6  px-3'>
      <Friends/>
      </div>
      <div className='lg:w-4/12 md:w-6/6 sm:w-full h-3/6  px-3'>
     <Users/>
      </div>
      <div className='lg:w-4/12 md:w-6/6 sm:w-full  h-3/6  px-3'>
      <FriendRequest/>
      </div>
      <div className='lg:w-4/12 md:w-6/6 sm:w-full  h-3/6  px-3'>
      <MyGroups/>
      </div>
      <div className='lg:w-4/12 md:w-6/6 sm:w-full  h-3/6  px-3'>
      <Blocks/>
      </div>
    </div>
  )
}

export default Home