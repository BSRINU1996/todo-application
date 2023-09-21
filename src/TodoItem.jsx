import React from 'react'
import CloseIcon from '@mui/icons-material/Close';


const TodoItem = (props) => {

    // console.log(props);
    const { id, todoItem, handleDelete } = props;
    // console.log(todos);
    return (
        <div style={{ display: "flex", justifyContent: "space-around" }}>
            <h2>{todoItem}</h2>
            <CloseIcon style={{ marginTop: "20px", cursor: "pointer" }} onClick={() => handleDelete(id)} />
        </div>
    )
}

export default TodoItem
