import React from "react";


export default function Todo({todo, handleUpdateTodo, handleDeleteTodo}){

  const [isEditing, setIsEditing] = React.useState(false);


  const handleCheckboxClick = () => handleUpdateTodo(
    {...todo, 
    completed: !todo.completed}
  )

  const handleEditTodo = (e) => handleUpdateTodo(
    {...todo, 
    label: e.target.value}
  )

  const handleEditClick = () => setIsEditing(!isEditing);

  const handleDeleteClick = () => handleDeleteTodo(todo.id);

  



  
    return(
      <li>
        <div className="todo-item" key={todo.id}>
            <input 
            type="checkbox" 
            checked={todo.completed } 
            onChange={handleCheckboxClick}
            />
            <span className="todo-text">{todo.label}</span>
            <button className="edit-btn">Edit</button>
            <button className="delete-btn" onClick={handleDeleteClick}>Delete</button>
        </div>


  
      </li>
     
    )
  
  }