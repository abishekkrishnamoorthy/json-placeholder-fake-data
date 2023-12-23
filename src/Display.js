import React from 'react'

const Display = ({item}) => {
  return (
    <div className='dis bg-black size-fit text-white text'>
    <pre>{JSON.stringify(item,null,2)}</pre>  
    </div>
  )
}

export default Display