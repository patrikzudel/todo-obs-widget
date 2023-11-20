import type { Component } from 'solid-js';
import { createSignal } from 'solid-js';

const App: Component = () => {
  const [tasks, setTasks] = createSignal(["Task 1", "Task 2"]);
  const [currentTask, setCurrentTask] = createSignal("");

  function addTask(newTask) {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  }

  function removeTask(index) {
    setTasks((prevTasks) => {
      const newTasks = [...prevTasks];
      newTasks.splice(index, 1);
      return newTasks;
    });
  }

  return (
    <>
      <div class='m-4'>
        <input class='p-2 mr-4 border-2 rounded-md border-black' type="text" id="newTask" placeholder="Enter new task" />
        <button class=' bg-sky-300 p-2 rounded-md text-white hover:bg-sky-500 transition-colors duration-100'
          onClick={() => {
            const newTask = document.getElementById("newTask").value;
            addTask(newTask);
            document.getElementById("newTask").value = "";
          }}
        >
          Add Task
        </button>
      </div>
    <div class='bg-black/50 border-x-0 border-[#ABCAEB]/50  rounded-md text-blue-50/90 m-4 p-2 w-64'>
      <h1 class='mx-1 text-xl border-b-2 border-blue-50/50'>Chapters</h1>
      <ul class='mt-2 ml-0'>
        {tasks().map((task, index) => (
          <li onClick={() => {
            setCurrentTask(task)
          }} class={'pl-4 rounded-md mb-1 hover:bg-white/20 transition-colors duration-200 cursor-pointer ' + 
          ((currentTask() === task) && 'bg-white/20')} key={index}>
            <div class='group flex justify-between'>
            {task}
            <button onClick={() => {removeTask(index)}} class=' opacity-0 group-hover:opacity-70 transition-opacity duration-100 bg-red-500 px-2 rounded-md'>X</button>
            </div>
            </li>
        ))}
      </ul>
    </div>
    </>
  );
}

export default App;