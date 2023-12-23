import React from 'react'

const Post = ({setbtn}) => {
  return (
    <div className='post text-center text-xl '>
     <button className='p-10 hover:bg-teal-100'
     onClick={()=>(setbtn('post'))}>post</button>
    </div>
  )
}

export default Post