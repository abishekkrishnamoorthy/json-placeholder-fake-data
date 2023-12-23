

import { useState, useEffect } from 'react';
import Header from './Header';
import Display from './Display';

function App() {
    const url='https://jsonplaceholder.typicode.com/'
    const [item,setitem]=useState([])
    const [btnvalue,setbtnvalue]=useState('users')
    useEffect (()=>{
      const handle=async()=>{
        try{
        const res=await fetch(`${url}${btnvalue}`)
        if(!res.ok) throw Error ("can't able to fetch")
        const data= await res.json()
        setitem(data)
        }catch(err){
         console.log(err)
        }
      }
        (async ()=> await handle()) ()  
    }, [btnvalue])

  return (
    <div className='app flex flex-col'>
      <Header 
              setbtn={setbtnvalue}/>
       <Display btnvalue={btnvalue}
                item={item}/>
      
    </div>
  );
}

export default App;
