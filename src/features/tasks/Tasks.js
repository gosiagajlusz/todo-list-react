import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import Form from "./Form";
import TasksList from "./TasksList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";
import { theme } from "../../theme";
import { GlobalStyle } from "../../globalStyles";
import { selectTasks } from "./tasksSlice";

function Tasks() {
  const { tasks } = useSelector(selectTasks);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Header title="Lista zadań" />
        <Section title="Dodaj nowe zadanie" body={<Form />} />
        <Section
          title="Lista zadań"
          extraHeaderContent={<Buttons />}
          body={<TasksList />}
        />
      </Container>
    </ThemeProvider>
  );
}

export default Tasks;
