import React, { useState } from 'react'

function AddToDo(props) {
    const [title,setTitle] = useState("");
    const [desc, setDesc] = useState("");
    
    const submit = (e)=>{
        e.preventDefault();
        if(!title && desc){
            alert("Title Field Required!!");
        }
        else if(!desc && title){
            alert("Description field required!!")
        }
        else if(!title && !desc){
            alert("Title and Description field required !!");
        }
        else{
        props.addTask(title,desc);
        setTitle("");
        setDesc("");
        }
    };
    return (
        <div className = "container my-3">
            <h3 className = "text-center"> Add a Todo Task</h3>
            <form onSubmit = {submit}>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Task Name</label>
    <input type="text" value = {title} onChange = {(e) =>{
        setTitle(e.target.value)
    }} class="form-control" id="title" aria-describedby="emailHelp"/>
    <div id="detitle" class="form-text">Add as many tasks you wanna add and delete them when done XD</div>
  </div>
  <div class="mb-3">
    <label htmlFor="desc" class="form-label">Task Description</label>
    <input type="text" value = {desc} onChange = {(e) =>{
        setDesc(e.target.value)}} class="form-control" id="desc"/>
    <div id="detitle" class="form-text">Add a Description for your task</div>
  </div>
  <div className="text-center">
  <button type="submit" class="btn btn-primary btn-lg px-5 text-center me-2">Add Task</button>
  </div>
 
</form>
</div>
    )
}

export default AddToDo
