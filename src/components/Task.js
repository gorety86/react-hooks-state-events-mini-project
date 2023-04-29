import React, { useState } from "react";

function Task({text, category}) {
  const [currentTasks, setCurrentTask] = useState([])

  function removeTask(id){
    const tasks = []
    const updatedTasks=tasks.filter(task=> task.id !==id);
    setCurrentTask(updatedTasks);
  }
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={() => removeTask(currentTasks.id)} className="delete">X</button>
    </div>
  );
}

export default Task;
