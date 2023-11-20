import React, { useState, useEffect, useRef } from "react";
import { ThemeProvider } from "styled-components";
import Form from "./Form";
import TasksList from "./TasksList";
import Buttons from "./Buttons";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import { theme } from "../../../theme";
import { GlobalStyle } from "../../../globalStyles";
import { Search } from "./Search";
import { DownloadButton } from "./Button";
import { useDispatch } from "react-redux";
import { fetchExampleTasks } from "../tasksSlice";
import { useLocation } from "react-router-dom";
import { selectLoadingTasks } from "../tasksSlice";
import { useSelector } from "react-redux";

function TasksPage() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoadingTasks);
  const location = useLocation();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Header title="Lista zadań" />
        <Section
          title="Dodaj nowe zadanie"
          extraHeaderContent={
            <DownloadButton disable={loading} onClick={() => dispatch(fetchExampleTasks())}>
              {loading ? "Ładowanie... " : "Pobierz przykładowe zadania"}
            </DownloadButton>
          }
          body={<Form />}
        />
        <Section title="Wyszukiwarka" body={<Search />} />
        <Section
          title="Lista zadań"
          extraHeaderContent={<Buttons />}
          body={<TasksList />}
        />
      </Container>
    </ThemeProvider>
  );
}

export default TasksPage;
