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
     
          <label htmlFor={todo.id}>
            <div>
              <input 
              type="checkbox"
              id={todo.id}
              checked= {todo.completed}
              onChange={handleCheckboxClick}
            
              />
            </div>
            {isEditing? <input 
              type="text"
              value= {todo.label}
              onChange={handleEditTodo}

              
            
              />: <span>{todo.label}</span> }
           
          {<button onClick={handleEditClick}>{isEditing ? "Save":"Edit"}</button> }
          <button onClick={handleDeleteClick}>Delete</button>
          </label>   
  
      </li>
     
    )
  
  }