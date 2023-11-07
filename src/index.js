import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import { configureStore } from "@reduxjs/toolkit";
import { App } from "./App";
import store from "./store";

// const initialState= {tasks:[],};

// const tasksReducer = (state = initialState, action)=>{
// if (action.type==="addTask"){
//   return {
//     ...state,
//     tasks:[
//       ...state.tasks,
//       {content:action.payload},
//     ]
//   };
//   }
//   return state;
// };

// const addTaskAction= {
//   type:"addTask",
//   payload: "Nauczyć się całego reduxa",
// }

// const addTask = content => ({
//   type: "addTask",
//   payload: content,
// })

// const selectTasks = state => state.tasks;

// const store = configureStore({reducer:tasksReducer});
// console.log(selectTasks(store.getState()));

// store.dispatch(addTask("kanapka"));
// console.log(store.getState());

// store.dispatch(addTask("kanapka2"));
// console.log(store.getState());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
