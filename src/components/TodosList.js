import React from 'react'

export const TodosList = ({ todos, handleCompleteTask }) => {
  const totalIncomplete = todos.filter(todo => todo.isDone === false).length
  return (
    <div>
      <ul>
        {todos.map(todo => (
          <li
            key={todo.id}
            style={{
              textDecoration: todo.isDone ? 'line-through' : 'none'
            }}
          >
            <input
              type="checkbox"
              value={todo.isDone}
              onChange={() => handleCompleteTask(todo.id)}
            />{' '}
            {todo.value}
          </li>
        ))}
      </ul>
      <div>
        {totalIncomplete} remaining out of {todos.length} tasks
      </div>
    </div>
  )
}
