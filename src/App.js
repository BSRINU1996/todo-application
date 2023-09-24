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
import {useState} from 'react'
import CustomHook from './CustomHook'


function App() {
  const [showTimer,setShowTimer] = useState(true);
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
       <CustomHook/>
    </div>
  );
}

export default App;
