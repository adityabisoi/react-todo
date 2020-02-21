import React from 'react'

function ToDoItem(props){
    return(
        <div className="todo-item">
            <input type="checkbox" checked={props.completed}></input>
            <p style={{color: props.completed ? "gray":"black"}}> {props.text} </p>
        </div>        
    )
}

export default ToDoItem