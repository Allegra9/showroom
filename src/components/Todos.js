import React, { useState } from 'react'
import { NewTodoForm } from './NewTodoForm'
import { TodosList } from './TodosList'

export const Todos = () => {
  const [todo, setTodo] = useState({
    id: 0,
    value: '',
    isDone: false
  })
  const [todos, setTodos] = useState([])

  const handleCompleteTask = todoId => {
    const updatedList = todos.map(item => {
      if (item.id === todoId) {
        const updatedItem = {
          ...item,
          isDone: !item.isDone
        }
        return updatedItem
      }
      return item
    })
    setTodos(updatedList)
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (!todo.value) return
    setTodos([...todos, todo])
    setTodo({ ...todo, value: '' })
  }

  const handleChange = e => {
    const lastTodo = todos[todos.length - 1]
    const newId = !lastTodo ? 0 : lastTodo.id + 1
    setTodo({
      id: newId,
      value: e.target.value,
      isDone: false
    })
  }

  return (
    <div>
      Todo list
      <NewTodoForm
        todo={todo}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <TodosList todos={todos} handleCompleteTask={handleCompleteTask} />
    </div>
  )
}
