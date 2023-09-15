import React, { useState } from 'react'

const Input = () => {
    const [text, setText] = useState("")
    const handleChange = (e) => {
        setText(e.target.value);
    }
    return (
        <>
            <h1>Input</h1>
            <input type="text" placeholder="enetr your name" onChange={handleChange} />
            <h2>{text}</h2>
        </>
    )
}

export default Input