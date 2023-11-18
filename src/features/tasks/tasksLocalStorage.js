const localStorageKey = "tasks";
const localStorageHideDoneKey = "hideDone";

export const saveTasksInLocalStorage = (tasks) =>
  localStorage.setItem(localStorageKey, JSON.stringify(tasks));

export const getTasksFromLocalStorage = () =>
  JSON.parse(localStorage.getItem(localStorageKey)) || [];

export const saveHideDoneStateInLocalStorage = (hideDone) =>
  localStorage.setItem(localStorageHideDoneKey, JSON.stringify(hideDone));

export const getHideDoneStateFromLocalStorage = () =>
  JSON.parse(localStorage.getItem(localStorageHideDoneKey)) || false;
