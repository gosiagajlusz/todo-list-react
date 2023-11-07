import React, { useState, useEffect, useRef } from "react";
import Form from "./Form";
import TasksList from "./TasksList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";
import { useTasks } from "./useTasks";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";
import { GlobalStyle } from "../../globalStyles";



function Tasks() {
  const {
    tasks,
    removeTask,
    toggleTaskDone,
    setAllDone,
    addNewTask,
    setHideDone,
    hideDone,
    toggleHideDone,
  } = useTasks();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Container>
        <Header title="Lista zadań" />

        <Section
          title="Dodaj nowe zadanie"
          body={<Form addNewTask={addNewTask} />}
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
            <TasksList
              tasks={tasks}
              hideDone={hideDone}
              removeTask={removeTask}
              toggleTaskDone={toggleTaskDone}
              useTasks={useTasks}
            />
          }
        />
      </Container>
    </ThemeProvider>
  );
}

export default Tasks;
