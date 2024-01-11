import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import {Todo} from './components/Todos'

//Useeffect hook

function App() {
  const [todos, setTodos] = useState([])
  useEffect(()=>{fetch("http://localhost:3000/todos")
  .then(async function(res){
    const json=await res.json();
    setTodos(json.todos);
  })},[])
  
    
  
    const handleTodoStatusChange = (index) => {
      const updatedTodos = [...todos];
      updatedTodos[index].completed = !updatedTodos[index].completed;
      setTodos(updatedTodos);
      console.log(todos);
    };
  return (
   
      <div>
       <CreateTodo></CreateTodo>
       <Todo todos={todos} onStatusChange={handleTodoStatusChange}></Todo>
    </div>
  )
}


export default App
