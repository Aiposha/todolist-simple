import { useState } from "react"

import Todolist from "./components/Todolist"
import { TodoForm } from "./components/TodoForm"




function App() {
  const [todos,setTodos] = useState([])

const onNewTodo = (newTodo) => {
setTodos([...todos, newTodo])
}
const onDeleteItem = (id) => {
  const newFilteredTodos = todos.filter((item) => item.id !== id)
  setTodos(newFilteredTodos)
}
  return(
    <div>
      <TodoForm onNewTodo={onNewTodo}/>
      <Todolist todos={todos } onDeleteItem={onDeleteItem}/>
    </div>
  )
}

export default App
