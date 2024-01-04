import React, { useState, useEffect } from "react";
import TaskList from "./TaskList";
import Greeting from "./Greeting";

function MyTodo() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [timeOfDayGreeting, setTimeOfDayGreeting] = useState("");
  const [taskGreeting, setTaskGreeting] = useState("");
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const now = new Date();
    const hours = now.getHours();

    // Determine time of day
    let timeOfDay = "";
    if (hours >= 6 && hours < 12) {
      timeOfDay = "Good morning!";
    } else if (hours >= 12 && hours < 17) {
      timeOfDay = "Good afternoon!";
    } else {
      timeOfDay = "Good evening!";
    }
    setTimeOfDayGreeting(timeOfDay);

    // Determine task-related greeting
    let taskGreeting = "";
    const completedTasksCount = tasks.filter((task) => task.completed).length;

    if (completedTasksCount === 0) {
      taskGreeting = "Lets complete some task !";
    } else if (completedTasksCount <= 3) {
      taskGreeting = `You've completed ${completedTasksCount} tasks. You're doing well !`;
    } else {
      taskGreeting = `You're on fire !!! ${completedTasksCount} tasks completed !`;
    }
    setTaskGreeting(taskGreeting);

    // Combine time of day and task-related greetings
    setGreeting(`${timeOfDay} ${taskGreeting}`);
  }, [tasks]);

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const toggleCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <div className="max-w-xl mx-auto mt-8 p-4 bg-white shadow-md">
        <Greeting
          timeOfDayGreeting={timeOfDayGreeting}
          taskGreeting={taskGreeting}
        />
        <div className="flex mb-4">
          <input
            type="text"
            className="flex-1 border rounded-l py-2 px-4"
            placeholder="Add a new task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-r"
            onClick={addTask}
          >
            Add
          </button>
        </div>
        <TaskList
          tasks={tasks}
          toggleCompletion={toggleCompletion}
          removeTask={removeTask}
        />
      </div>
    </div>
  );
}

export default MyTodo;
