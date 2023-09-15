import React, { useState } from 'react'
import styled from 'styled-components';
import TodoItem from './TodoItem.jsx';
// import CloseIcon from '@mui/icons-material/Close';

const Todo = () => {
    const [text, setText] = useState('');
    const [todos, setTodos] = useState([]);
    const changeHandler = (e) => {
        setText(e.target.value);
    }
    const handleClick = () => {
        // todos.push(text);
        setTodos([...todos, text])
        // console.log(todos);

    }
    const handleDelete = (id) => {
        const filteredArr = todos.filter((each, index) => {
            return index !== id;
        })
        setTodos(filteredArr);
    }
    // console.log(text);
    // console.log(todos);
    return (
        <>
            <Title>What to Todo- What not to Do</Title>

            <Input onChange={changeHandler} placeholder="Enter the Todo" type="text" />
            <Button onClick={handleClick} >Add</Button>
            {todos.map((each, index) => <TodoItem todoItem={each} key={index} id={index} handleDelete={handleDelete} />)}
        </>
    )
}

export default Todo

const Input = styled.input`
   width:300px;
   height:30px;
   border-radius:5px;
   font-size:20px;
   color:blue;
`
const Title = styled.h1`
  color: blue;
//   background-color:violet;
`

const Button = styled.button`
   color: #d1aa3f;
   width:60px;
   height:30px;
   background-color:#709491;
   border-radius:5px;
   margin-bottom:5px;
   cursor:pointer;
//    margin:auto;
`