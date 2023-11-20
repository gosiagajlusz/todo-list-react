import Container from "../../common/Container";
import Section from "../../common/Section";
import Header from "../../common/Header";
import { theme } from "../../theme";
import { ThemeProvider } from "styled-components";
import { Paragraph } from "./styled";

export const AuthorPage = () => (
  <ThemeProvider theme={theme}>
    <Container>
      <Header title="O autorze" />
      <Section
        title="Małgorzata Gajlusz"
        body={
          <>
            <Paragraph>
              Jestem Gosia. Projektuję wnętrza i uczę się tworzenia aplikacji i
              stron internetowych.<br></br>Dążę do tego, żeby aplikacje mojego
              autorstwa były estetyczne i przyjemne w użytkowaniu.
              <br></br>
              Moje pasje to gotowanie, fitness i architektura wnętrz.
            </Paragraph>
          </>
        }
      />
    </Container>
  </ThemeProvider>
);
