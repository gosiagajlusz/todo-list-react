import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { List, Item, Content, Button, StyledLink } from "./styled";
import {
  toggleTaskDone,
  removeTask,
  selectHideDone,
  selectTaskByQuery,
} from "../../tasksSlice";
import searchQueryParamName from "../searchQueryParamName";

const TasksList = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get(searchQueryParamName);
  const dispatch = useDispatch();
  const tasks = useSelector((state) => selectTaskByQuery(state, query));
  const { hideDone } = useSelector(selectHideDone);

  return (
    <List>
      {tasks.map((task) => (
        <Item key={task.id} hidden={task.done && hideDone}>
          <Button $toggleDone onClick={() => dispatch(toggleTaskDone(task.id))}>
            {task.done ? "✔" : "   "}
          </Button>
          <Content done={task.done}>
            <StyledLink to={`/zadania/${task.id}`}>{task.content}</StyledLink>
          </Content>
          <Button $remove onClick={() => dispatch(removeTask(task.id))}>
            🗑
          </Button>
        </Item>
      ))}
    </List>
  );
};
export default TasksList;
