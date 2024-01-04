import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, toggleCompletion, removeTask }) => {
  return (
    <div>
      <ul>
        {tasks.map((task, index) => (
          <TaskItem
            key={index}
            task={task}
            index={index}
            toggleCompletion={toggleCompletion}
            removeTask={removeTask}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
