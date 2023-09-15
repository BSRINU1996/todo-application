import React, { useState } from 'react'

const Counter = () => {
    const [count, setcCount] = useState(0)
    return (
        <>
            {/* <p> {count}</p> */}
            <h1> Count is {count} </h1>
            <button onClick={()=>{setcCount(count+1)}}>Inc</button>

        </>
    )
}

export default Counter