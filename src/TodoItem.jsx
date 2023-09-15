import React from 'react'
import CloseIcon from '@mui/icons-material/Close';


const TodoItem = (props) => {

    // console.log(props);
    const { id, todoItem, handleDelete } = props;
    // console.log(todos);
    return (
        <div style={{ display: "flex", justifyContent: "space-around", border: "2px solid black" }}>
            <h2>{todoItem}</h2>
            <CloseIcon style={{ border: "2px solid black", marginTop: "18px", cursor: "pointer" }} onClick={() => handleDelete(id)} />
        </div>
    )
}

export default TodoItem