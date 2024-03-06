import { useState, useEffect } from 'react'
import './App.css'
import {CreateTodo} from "./Components/CreateTodo.jsx";
import {Todos} from "./Components/Todos.jsx";

function App() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
            fetch("http://localhost:3000/todos").then(async function(res){
                const json = await res.json();
                setTodos(json.allTodos);
            })
  }, [])

  return (
    <div>
        <CreateTodo />
        <Todos todos={todos}/>
    </div>
  )
}

export default App
