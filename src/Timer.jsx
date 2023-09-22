import React,{useState,useEffect} from 'react'

const Timer = () => {
    const [value, setValue]=useState(20);

    useEffect(()=>{
        console.log("callBack in the useEffect called")
        let IntervalId = setInterval(()=>{
            console.log('callback inside setInterval');
            // setValue(value-1)},1000)   //(prevValue)=>prevValue-1
            setValue((prevValue)=>{
                if(prevValue <= 1){
                    clearInterval(IntervalId)
                    return 0;
                }else{
                    return prevValue-1;
                }
            })
          },1000)
    return () =>{
      console.log("component is unmounted")
      clearInterval(IntervalId);
     }  
     },[])

    // useEffect(()=>{
    //   return ()=>{
    //     console.log("component is unmounted")
    //   }  
    // })

  return (
    <>
    <h1>CountDownTimer : {value}</h1>
    
    </>
  )
}

export default Timer;