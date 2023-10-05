import React, { useState } from 'react';
import './Todo.css' 
const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleAddTodo = () => {
    if (inputText) {
      setTodos([...todos, inputText]);
      setInputText('');
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };
  
  return (
    <div>
      <h1 className='title'>Todo List</h1>
      <div>
        <input
          type="text"
          placeholder="Add a new todo"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo} <button onClick={() => handleDeleteTodo(index)}>Delete</button>
          </li>
            ))}
            </ul>
          </div>
        );
      };
      
      export default Todo;
      
