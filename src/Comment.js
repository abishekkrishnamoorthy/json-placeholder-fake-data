import React from 'react'

const Comment = ({setbtn}) => {
  return (
     <div className='comment text-center text-xl'>
     <button className='p-10  hover:bg-teal-100' onClick={()=>(setbtn('comments'))}>comment</button>
    </div>
  )
}

export default Comment