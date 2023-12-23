import React from 'react'

    const User = ({setbtn}) => {
  return (
    <div className='user text-center text-xl'>
        <button className=' p-10  hover:bg-teal-100' onClick={()=>(setbtn('user'))}>user</button>
    </div>
  )
}

export default User