import React,{useState} from 'react';

function Todo() {
const [todos, setTodos] = useState(['Write React', 'Eat good food']);
const [task, setTask] = useState('');

function handleInput(event){
    setTask(event.target.value)
};

function handleAddTask(){
    if (task.trim() !== '') {
        setTodos(t => [...t, task])
    setTask('')
    };
};

function handleDelete(index){
    setTodos(t => t.filter((_,i) => i !== index))
};

function handleMoveUp(index) {

    if (index > 0) {
      const updatedTask = [...todos];
        [updatedTask[index], updatedTask[index - 1]] = 
        [updatedTask[index - 1], updatedTask[index]];
        setTodos(updatedTask);
    }

};
function handleMoveDown(index) {
    if (index < todos.length - 1) {
        const updatedTask = [...todos];
          [updatedTask[index], updatedTask[index + 1]] = 
          [updatedTask[index + 1], updatedTask[index]];
          setTodos(updatedTask);
      }
}



  return (
    <div className='todo-container'>
        <h1>MY TODO - LIST</h1>

        <div className='first-container'>
            <input type='text' 
            className='input-todo'
            value = {task} 
            placeholder='Enter to-do here...'
            onChange = {handleInput} 
            />
            <button className='add-button button'
             onClick = {handleAddTask}>
                Add
            </button>
        </div>
        <ol>
            {todos.map((todo,index) => <li key={index} className='todo-list'>
                <span className='task'>{todo}</span>
                <button className='delete-button button'
                  onClick = {()=>handleDelete(index)}>
                    Delete
                </button>
                <button className='up-button'
                  onClick = {()=>handleMoveUp(index)}>
                    🔺 
                </button>
                <button className='down-button'
                  onClick = {() => handleMoveDown(index)}>
                    🔻  
                </button>
            </li>)}
        </ol>
    </div>
  )
}

export default Todo