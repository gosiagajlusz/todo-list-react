import { ThemeProvider } from "styled-components";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import { theme } from "../../../theme";
import { GlobalStyle } from "../../../globalStyles";
import { getTaskById } from "../tasksSlice";
import { Paragraph } from "./styled";

function TaskPage() {
  const { id } = useParams();
  const task = useSelector(state => getTaskById(state, id));

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Header title="Szczegóły zadania" />
        <Section
          title={task ? task.content : "Niestety nie znaleziono zadania 😿"}
          body={<>{task ? `Ukończone: ${task.done ? "Tak" : "Nie"}` : ""}</>}
        />
      </Container>
    </ThemeProvider>
  );
}

export default TaskPage;
