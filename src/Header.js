import React from 'react'
import User from './User'
import Post from './Post'
import Comment from './Comment'

const Header = ({setbtn}) => {
  return (
    <div className='flex flex-row justify-start '>
    <User setbtn={setbtn}/>
    <Post setbtn={setbtn}/>
    <Comment setbtn={setbtn}/>
    </div>
  )
}

export default Header