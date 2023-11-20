import { createSlice } from "@reduxjs/toolkit";
import {
  getTasksFromLocalStorage,
  getHideDoneStateFromLocalStorage,
} from "./tasksLocalStorage";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: getTasksFromLocalStorage(),
    hideDone: getHideDoneStateFromLocalStorage,
  },

  reducers: {
    addTask: ({ tasks }, { payload: task }) => {
      tasks.push(task);
    },
    toggleHideDone: (state) => {
      state.hideDone = !state.hideDone;
    },
    toggleTaskDone: ({ tasks }, { payload: taskId }) => {
      const index = tasks.findIndex((task) => task.id === taskId);
      tasks[index].done = !tasks[index].done;
    },
    removeTask: ({ tasks }, { payload: taskId }) => {
      const index = tasks.findIndex((task) => task.id === taskId);
      tasks.splice(index, 1);
    },
    setAllDone: ({ tasks }) => {
      for (const task of tasks) {
        task.done = true;
      }
    },
    fetchExampleTasks: (state) => {
      state.loading = true;
    },
    fetchExampleTasksSuccess: (state, { payload: tasks }) => {
      state.tasks = tasks;
      state.loading = false;
    },
    fetchExampleTasksError: (state) => {
      state.loading = false;
    },
  },
});

export const {
  addTask,
  toggleHideDone,
  toggleTaskDone,
  removeTask,
  setAllDone,
  fetchExampleTasks,
  fetchExampleTasksError,
  fetchExampleTasksSuccess,
  setTasks,
} = tasksSlice.actions;

export const selectTasksState = (state) => state.tasks;
export const selectTasks = (state) => selectTasksState(state).tasks;
export const selectHideDone = (state) => selectTasksState(state).hideDone;

export const getTaskById = (state, taskId) =>
  selectTasks(state).find(({ id }) => id === taskId);
export const selectLoadingTasks = (state) => selectTasksState(state).loading;

export const selectTaskByQuery = (state, query) => {
  const tasks = selectTasks(state);

  {
    if (!query || query.trim() === "") {
      return tasks;
    }
    return tasks.filter(({ content }) =>
      content.toUpperCase().includes(query.trim().toUpperCase())
    );
  }
};

export default tasksSlice.reducer;
