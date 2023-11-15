import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import { theme } from "../../../theme";
import { GlobalStyle } from "../../../globalStyles";

function TaskPage() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Header title="Szczegóły zadania" />
        <Section title="test"
         body={<>xd</>} />
        
      </Container>
    </ThemeProvider>
  );
}

export default TaskPage;
