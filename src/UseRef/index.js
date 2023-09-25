import React from 'react'
import {useRef,useState} from 'react'

const RefPract = () => {
    let initialValue = 30;
   const [count,setCount] =useState(initialValue);
   const ref =  useRef(null);
//    console.log(ref);
   const handleStart =() => {
    //    console.log(ref.current)
    if(ref.current !== null) return;
   const IntervalId = setInterval(()=>{setCount((prev)=>prev-1)},1000);
        ref.current = IntervalId;
   }
  const  handleStop = () =>{
       clearInterval(ref.current);
       ref.current = null;
   }
   const handleReset = () => {
       setCount(30);
       clearInterval(ref.current);
       ref.current = null;
   }
  return (
    <>
    <h1>
    Timer
    </h1>
    <h1>{count}</h1>
    <button onClick={handleStart}>start</button>
    <button onClick={handleStop}>stop</button>
    <button onClick={handleReset}>reset</button>
    {/* {ref.current.map((each,index)=><h1 key={index}>{each}</h1>)} */}
    </>
  )
}

export default RefPract