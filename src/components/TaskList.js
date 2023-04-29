import React from "react";
import Task from "./Task";

function TaskList({taskData}) {

  return (
    <div className="tasks">
      <Task key={taskData[0]} text={taskData[0]} category={taskData[0].category}/>
      <Task key={taskData[1]} text={taskData[1]} category={taskData[1].category}/>
      <Task key={taskData[2]} text={taskData[2]} category={taskData[2].category}/>
      <Task key={taskData[3]} text={taskData[3]} category={taskData[3].category}/>
      <Task key={taskData[4]} text={taskData[4]} category={taskData[4].category}/>
      <Task key={taskData[5]} text={taskData[5]} category={taskData[5].category}/>
      <Task key={taskData[6]} text={taskData[6]} category={taskData[6].category}/>
    </div>
  );
}

export default TaskList;
