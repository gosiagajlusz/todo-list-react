import { HashRouter, Link, Switch, Route, Redirect } from "react-router-dom";
import TasksPage from "./features/tasks/TasksPage"
import TaskPage from "./features/tasks/TaskPage"
import { AuthorPage } from "./features/authorPage/AuthorPage";
import { StyledNavLink } from "./styled";
import { NavList } from "./styled";


export const App = ()=>(
    <HashRouter>
    <nav>
        <NavList>
            <li>
                <StyledNavLink to="/zadania">
                Zadania
                </StyledNavLink>
            </li>
            <li>
                <Link to="/autor">
                O autorze
                </Link>
            </li>
            </NavList>
            <Switch>
                <Route path="/zadania/:id">
                    <TaskPage/>
                </Route>
                <Route path="/zadania">
                <TasksPage/>
                </Route>
                <Route path="/autor">
                <AuthorPage/>
                </Route>
                <Route path="/">
                    <Redirect to="/zadania"/>
                </Route>
            </Switch>
    </nav>
    </HashRouter>);
