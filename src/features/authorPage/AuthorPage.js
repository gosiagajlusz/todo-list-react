import Container from "../../common/Container"
import Section from "../../common/Section"
import Header from "../../common/Header"
import { theme } from "../../theme"
import { GlobalStyle } from "../../globalStyles"
import { ThemeProvider } from "styled-components";


export const AuthorPage = ()=>(
    <ThemeProvider theme={theme}>
    <Container>
        <Header title="O autorze"/>
        <Section
        title= "Małgorzata Gajlusz"
        body={
            <>
            <p>Jestem Gosia. Projektuję wnętrza i uczę się tworzenia
            aplikacji i stron
            internetowych.Dążę do tego, żeby aplikacje
             mojego autorstwa były estetyczne i przyjemne w użytkowaniu.</p></>
        }
        />
    </Container>
    </ThemeProvider>
)