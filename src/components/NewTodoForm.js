import React from 'react'

export const NewTodoForm = ({ todo, handleChange, handleSubmit }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          New todo:
          <input
            type="text"
            value={todo.value}
            onChange={handleChange}
            required
          />
        </label>
        <button>Add</button>
      </form>
    </div>
  )
}
