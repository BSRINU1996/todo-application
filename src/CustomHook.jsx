import React from 'react';
import {useState} from 'react';
const useCounter =(initialValue) => {
  const [valuEe,setValue]=useState(initialValue);
     const counter  = valuEe;
    function setIncrement (byInc) {
     setValue(valuEe+byInc);
     return valuEe;
    } 
    function setDecrement (byDec) {
     setValue(valuEe-byDec);
     return valuEe;
    }
    function setReset () {
     setValue(100);
     return valuEe;
    }
    return {counter,setIncrement,setDecrement,setReset}
}

const CustomHook = () => {
  
  
  const {counter,setIncrement,setDecrement,setReset} = useCounter(20)

  return (
    <> 
    <h1>CustomHook</h1>
    <h1>{counter}</h1>
    <button onClick={()=>{setIncrement(1)}}>+</button>
    <button onClick={()=>{setDecrement(3)}}>-</button>
    <button onClick={()=>{setReset()}}>RESET</button>
    </>

  )
}

export default CustomHook;