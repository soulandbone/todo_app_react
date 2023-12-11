import React from "react";


export default function Todo({todo, handleUpdateTodo, handleDeleteTodo}){

  const [editing, setEditing] = React.useState(false);
  
  const handleCheckboxClick = () => handleUpdateTodo({
    ...todo,
    completed: !todo.completed,
  });

  const handleEditClick = () => setEditing(!editing);
  
  const handleUpdateLabel = (e) => handleUpdateTodo({
    ...todo,
    label: e.target.value,
  });
  
  const handleDeleteClick = () => handleDeleteTodo(todo.id);
  
    
  
  
    return (
      <div>
      <label htmlFor="checkbox">
        <div className='todo-container'>
          <input type="checkbox" 
            id='checkbox' 
            checked={todo.completed}
            onChange ={handleCheckboxClick}/>
        </div>
        {editing ? (
          <input 
            type='text' 
            value={todo.label} 
            onChange={handleUpdateLabel}
          />
        ) : (<span>{todo.label}</span>)}
        
      </label>
      <button onClick={handleEditClick}>
        {editing ? "Save": "Edit"}
        </button>
      <button onClick={handleDeleteClick}>
        Delete
      </button>
      </div>
    )
  
  }