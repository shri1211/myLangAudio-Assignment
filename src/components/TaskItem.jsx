import React from 'react';

function TaskItem({ task, index, toggleCompletion, removeTask }) {
  return (
    <li
      className={`flex justify-between items-center mb-2 ${
        task.completed ? 'line-through text-gray-500' : ''
      }`}
    >
      <span>{task.text}</span>
      <div>
        <button
          className={`mr-2 ${
            task.completed ? 'text-gray-500' : 'text-blue-500'
          }`}
          onClick={() => toggleCompletion(index)}
        >
          {task.completed ? 'Completed' : 'Complete'}
        </button>
        <button className="text-red-500" onClick={() => removeTask(index)}>
          Remove
        </button>
      </div>
    </li>
  );
}

export default TaskItem;