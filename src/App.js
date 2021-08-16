
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'
import Todos from './components/Todos'
import React, { useState, useEffect } from 'react';
import AddToDo from './components/AddToDo';
function App() {
    let initTodo;
  if(localStorage.getItem("todos")==="null"){
      initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo)=>{
    alert("You are Deleting " + todo.title)
    // let index = todos.indexOf(todo);
    // todos.splice(index,1);

    updateTodos(todos.filter((e) => {
      return e!== todo;
    }));

    localStorage.setItem("todos",JSON.stringify(todos));
  }

  const addTask = (title,desc)=>{
    let id;
    if(todos.length === 0){
      id=0;
    }
    else{
    id = todos[todos.length-1].id +1;
    }
    const myTodo = {
      id: id,
      title: title,
      desc : desc
    }
    updateTodos([...todos,myTodo]);

  }

  const [todos, updateTodos] = useState(initTodo);
    useEffect(()=>{
      localStorage.setItem("todos",JSON.stringify(todos));
      
    },[todos])
  return (
    <div className="App">
      <Header title = "Todo-List" searchBar = {true}/>
      <AddToDo addTask = {addTask}/>
      <Todos todoItems = {todos} onDelete = {onDelete}/>
      <Footer/>
    </div>

  );
}

export default App;
