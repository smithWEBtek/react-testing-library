import React, { useState } from 'react';

const Todo = () => {
  const [inputValue, setInputValue] = useState('add todo')
  const [todoList, setTodoList] = useState([])

  const handleInputChange = e => {
    setInputValue(e.target.value)
    setTodoList(inputValue)
  }
  const handleUpdateTodoList = () => {
    setTodoList(inputValue)
  };

  return <div>
    <form>
      <input
        value={inputValue}
        onChange={handleInputChange}
      />
      <button
        onClick={handleUpdateTodoList}>Add todo</button>
    </form>
    <div>List of todos: {todoList}</div>
  </div>
}

export default Todo;
