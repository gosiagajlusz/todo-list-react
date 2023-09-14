import React from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

const tasks = [
  { id: 1, content: "przejść na reacta", done: true },
  { id: 2, content: "50 min cardio", done: false },
];
const hideDoneTasks = false;

function App() {
  return (
    <Container>
      <main className="main">
        <Header title="Lista zadań" />

        <Section title="Dodaj nowe zadanie" body={<Form />} />
        <Section
          title="Lista zadań"
          extraHeaderContent={
            <Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />
          }
          body={<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />}
        />
      </main>
    </Container>
  );
}
export default App;
