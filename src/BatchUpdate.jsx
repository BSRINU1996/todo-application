import React from 'react'
import { useState } from "react";


const BatchUpdate = () => {
    const [amount, setAmount] = useState(0);
    const handleDeposit = (amt) => {
        // setAmount(amount + amt);
        setAmount((prevAmount) => prevAmount + amt);
        setAmount((prevAmount) => prevAmount + amt);
        setAmount((prevAmount) => prevAmount + amt);
        // setAmount((prevAmount) => prevAmount + amt);
        // setAmount(amount + 100);  //0+100
        setAmount(amount + 100);   //0+100
        // setAmount(amount + 300);   //0+100
        // setAmount(amount + 100);    //0+100
        // setAmount(amount + 900);    //0+100  //latest state update only will be displayed on UI.
        // handleWithdraw();
    };

    const handleWithdraw = () => {
        setAmount(amount - 100);
        setAmount(amount - 100);
    };

    return (
        <>
            <h1>State Update @ Batch Update</h1>
            <h1>Current Amount : {amount}</h1>
            <button onClick={() => handleDeposit(100)}>Deposit 100</button>
            {/* <button onClick={() => { handleDeposit(); handleWithdraw() }}>Deposit 100</button> */}
            <button onClick={handleWithdraw}>Withdraw 100</button>
        </>
    )
}

export default BatchUpdate