import React from 'react'
import Friends from '../Components/Screen/Friends'
import Users from '../Components/Screen/Users'
import FriendRequest from '../Components/Screen/FriendRequest'
import Blocks from '../Components/Screen/Blocks'
import Groups from '../Components/Screen/Groups'
import MyGroups from '../Components/Screen/MyGroup'


const Home = () => {
  return (
    <div className='md:flex flex-wrap h-full justify-around overflow-x-scroll'>
      <div className='home_grid'>
      <Groups/>
      </div>
      <div className='home_grid'>
      <Friends/>
      </div>
      <div className='home_grid'>
     <Users/>
      </div>
      <div className='home_grid'>
      <FriendRequest/>
      </div>
      <div className='home_grid'>
      <MyGroups/>
      </div>
      <div className='home_grid'>
      <Blocks/>
      </div>
    </div>
  )
}

export default Home