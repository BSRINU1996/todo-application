// import logo from './logo.svg';
import './App.css';
// import Input from './Input.jsx';
// import Counter from './Counter.jsx';
// import Todo from './Todo';
// import Problem from './Problem'
// import BatchUpdate from './BatchUpdate'
// import TicTacToe from './TicTacToe';
// import Posts from './Posts';
// import Timer from './Timer'
// import Practice from './Practice.js';
import {useState,useEffect} from 'react'
// import {Parent} from './Parent'
// import CustomHook from './CustomHook';
import RefPract from './UseRef/index' 



function App() {
  // const [showTimer,setShowTimer] = useState(true);
  // for pure components
  // const [id, setId] = useState(1);
  // const [salary, setSalary] = useState(10000000);
  // const [age, setAge] = useState(28)

  useEffect(()=>{
    setInterval(()=>{
      // setId((prevState)=>prevState+1)
    },1000)
  },[])
  return (
    <div className="App">
      {/* <h1>Counter</h1> */}
      {/* <Counter /> */}
      {/* <Input /> */}
      {/* <Todo /> */}
      {/* <Problem /> */}
      {/* <Practice /> */}
      {/* <BatchUpdate /> */}
      {/* <TicTacToe/> */}
      {/* <Posts/> */}
      
      {/* {showTimer && <Timer/>} */}
      {/* <button onClick={()=>{setShowTimer(!showTimer)}}>{showTimer ? "HIDE COUNTER" : "SHOW COUNTER"   }</button> */}
       {/* <CustomHook/> */}
      {/* <Parent id={id} salary={salary} age={age}/>  //purecomponents */}
      <RefPract/>
    </div>
  );
}

export default App;
