import { useState } from 'react'
import './App.css'
import {CreateTodo} from "./Components/CreateTodo.jsx";
import {Todos} from "./Components/Todos.jsx";

function App() {

  return (
    <div>
        <CreateTodo/>
        <Todos/>
    </div>
  )
}

export default App
