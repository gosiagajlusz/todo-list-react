import React, { useState } from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";
import { useEffect } from "react";
// import { useRef } from "react";

const getInitalTasks = () => {
  const tasksFromLocalStorage = localStorage.getItem("tasks");
};

function App() {
  // const inputRef = useRef(null);
  // const focusInput = () => {
  //   inputRef.current.focus();
  // };
  const [hideDone, setHideDone] = useState(false);

  const [tasks, setTasks] = useState(getInitalTasks);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const toggleHideDone = () => {
    setHideDone((hideDone) => !hideDone);
  };
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

  const addNewTask = (newTaskContent) => {
    if (newTaskContent !== "") {
      setTasks((tasks) => [
        ...tasks,
        {
          content: newTaskContent,
          done: false,
          id: !tasks.legth ? tasks[tasks.length - 1].id + 1 : 1,
        },
      ]);
    }
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
