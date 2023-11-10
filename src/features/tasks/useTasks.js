//localStorage code for future use

import { useState, useEffect } from "react";
import { exampleTasks } from "./exampleTasks";

const getInitialState = () => {
  const taskFromLocalStorage = localStorage.getItem("tasks");
  return JSON.parse(taskFromLocalStorage) || exampleTasks;
};

export const useTasks = () => {
  const [tasks, setTasks] = useState(getInitialState);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return {
    tasks,
  };
};
