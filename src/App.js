

import { useState, useEffect } from 'react';
import Header from './Header';
import Display from './Display';

function App() {
    const posturl='https://jsonplaceholder.typicode.com/posts'
    const userurl='https://jsonplaceholder.typicode.com/users'
    const commenturl='https://jsonplaceholder.typicode.com/comments'
    const [item,setitem]=useState([])
    const [btnvalue,setbtnvalue]=useState(null)
    useEffect (()=>{
      const handle=async()=>{
        try{
        const res=await fetch(btnvalue==='post'?posturl:btnvalue==='comment'?commenturl:userurl)
        if(!res.ok) throw Error ("can't able to fetch")
        const ritem= await res.json()
        setitem(ritem)
        console.log(item)
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
