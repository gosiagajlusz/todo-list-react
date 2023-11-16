import { HashRouter, Link, Switch, Route, Redirect } from "react-router-dom";
import TasksPage from "./features/tasks/TasksPage"
import TaskPage from "./features/tasks/TaskPage"
import { AuthorPage } from "./features/authorPage/AuthorPage";


export const App = ()=>(
    <HashRouter>
    <nav>
        <ul>
            <li>
                <Link to="/zadania">
                Zadania
                </Link>
            </li>
            <li>
                <Link to="/autor">
                O autorze
                </Link>
            </li>
            </ul>
            <Switch>
                <Route path="/zadania">
                    <TasksPage></TasksPage>
                </Route>
                <Route path="/zadania/:id">
                <TaskPage/>
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
