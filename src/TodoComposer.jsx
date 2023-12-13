import React from "react";

function createTodo (label) {
  return {id: Math.floor(Math.random() * 10000), label: label, completed: false}
}


export default function TodoComposer({handleAddTodo}) {

    const [label, setLabel] = React.useState('');

    const handleAddClick = () => {
        const newTodo = createTodo(label);
        handleAddTodo(newTodo)
    }

    const handleUpdateLabel = (e) => {
        setLabel(e.target.value);
    }
    
    



    return(
        <li>
            <input 
                type="text" 
                placeholder="Add a new todo"
                onChange={handleUpdateLabel}
            />
            <button
            onClick={handleAddClick}
            >Add Todo</button>

        </li>
    )
}