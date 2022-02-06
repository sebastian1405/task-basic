import React, { createElement, useState } from 'react';
import './App.css';


function App() {

  const [task, setTask] = useState(['']);
  const [agregar, setAgregar] = useState("");

  console.log(task,agregar);


 
  return (
    <form>

    <div className='App'>
      <h1>Task Basic</h1>
    
      <h3>Enter a Task</h3>
      <input type='text' placeholder='write a task' value={agregar} onChange={(e) =>setAgregar(e.target.value) }></input>
      <button  className='butonx' type='button' onClick={() => setTask([...task , agregar])}>ADD TASK</button>
      
       <textarea value={task} ></textarea>
     
     

    </div>
    </form>
  )
  
}

export default App;
