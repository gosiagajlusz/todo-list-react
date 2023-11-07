import { useState, useEffect } from "react";
import { exampleTasks } from "./exampleTasks";

const getInitialState = () => {
  const taskFromLocalStorage = localStorage.getItem("tasks");
  return JSON.parse(taskFromLocalStorage) || exampleTasks;
};

export const useTasks = () => {
  // const [hideDone, setHideDone] = useState(false);

  // const toggleHideDone = () => {
  //   setHideDone((hideDone) => !hideDone);
  // };

  const [tasks, setTasks] = useState(getInitialState);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const removeTask = (id) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

  const toggleTaskDone = (id) => {
    setTasks((tasks) =>
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, done: !task.done };
        }
        return task;
      })
    );
  };

  const setAllDone = () => {
    setTasks((tasks) => tasks.map((task) => ({ ...task, done: true })));
  };

  const addNewTask = (content) => {
    setTasks((tasks) => [
      ...tasks,
      {
        content,
        done: false,
        id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
      },
    ]);
  };
  return {
    tasks,
    removeTask,
    toggleTaskDone,
    setAllDone,
    addNewTask,
    // hideDone,
    // setHideDone,
    // toggleHideDone,
  };
};
