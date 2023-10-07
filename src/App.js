import React, { useState, useEffect } from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

function App() {

  const exampleTasks = [
    { id: 1, content: "przejść na Reacta", done: false },
    { id: 2, content: "zrobić obiad", done: true },
  ];

  const [hideDone, setHideDone] = useState(false);
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || exampleTasks
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const toggleHideDone = () => {
    setHideDone((hideDone) => !hideDone);
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


   
  // const addNewTask = (newTaskContent) => {
  //   const trimmedContent = newTaskContent.trim();
  //   if (trimmedContent !== "") {
  //     setTasks((tasks) => [
  //       ...tasks,
  //       {
  //         content: newTaskContent,
  //         done: false,
  //         id: !tasks.legth ? tasks[tasks.length - 1].id + 1 : 1,
  //       },
  //     ]);
  //   }
  // };

  

  const addNewTask = (content) => {
    setTasks(tasks => [
      ...tasks,
      {
        content,
        done: false,
        id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
      },
    ]);
  }
  
  const removeTask = (id) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };


  

  
  return (
    <Container>
      <Header title="Lista zadań" />

      <Section
        title="Dodaj nowe zadanie"
        body={
          <Form
            addNewTask={addNewTask}
            // inputRef={inputRef}
            // focusInput={focusInput}
          />
        }
      />
      <Section
        title="Lista zadań"
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
            setAllDone={setAllDone}
          />
        }
        body={
          <Tasks
            tasks={tasks}
            hideDone={hideDone}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />
        }
      />
    </Container>
  );
}
export default App;
