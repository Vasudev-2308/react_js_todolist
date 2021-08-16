import React from 'react'
import './TodoItem.css'
function TodoItem({todo, onDelete}) {


    return (
        <div>
            <h4 className="my-3 text-center">
                {todo.title}
            </h4>
            <p className = "my-3 mx-3 text-center">
                {todo.desc}
            </p>
            <div className="text-center ">
            <button className="btn btn-danger btn-lg px-5" onClick = {() =>onDelete(todo)}>Delete</button>
            </div>
           
        </div>
    )
}

export default TodoItem
