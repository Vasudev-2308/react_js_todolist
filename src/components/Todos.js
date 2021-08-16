import React from 'react'
import TodoItem from './TodoItem'
import './Todos.css'

function Todos(props) {
    let myStyle = {
        minHeight:"70vh",
        margin:"40px auto"
    }
    let hrx={
        height:"3px",
        color:"black",

    }
    return (
        <div className="container my-3" style = {myStyle}>
            <h1 className ="text-center ">Todo-List</h1>
            {props.todoItems.length === 0 ? <h5 className="text-center">No Todo's to Display</h5> :
             props.todoItems.map(
                (todo) => {
                return (
                    <>
                    <hr style={hrx} />
                    <TodoItem todo = {todo} onDelete = {props.onDelete}/>
                    <hr style={hrx} />
                    </>
                )
                
               })
            }
           
        </div>
    )
}

export default Todos
