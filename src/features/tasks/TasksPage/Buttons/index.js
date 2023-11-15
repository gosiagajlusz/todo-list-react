import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { ButtonsWrapper, Button } from "./styled";
import { selectTasksState,
  toggleHideDone,
  setAllDone,
  fetchExampleTasks
   } from "../../tasksSlice";


const Buttons = () => {
  const { tasks, hideDone } = useSelector(selectTasksState);
  const dispatch = useDispatch();
  return (
    <ButtonsWrapper>
      <Button onClick={()=>dispatch(fetchExampleTasks())}>
      Pobierz przykładowe zadania</Button>
      {tasks.length > 0 && (
        <>
          <Button onClick={() => dispatch(toggleHideDone())}>
            {hideDone ? "Pokaż" : "Ukryj"} ukończone
          </Button>
          <Button
            disabled={tasks.every(({ done }) => done)}
            onClick={() => dispatch(setAllDone())}
          >
            Ukończ wszystkie
          </Button>
        </>
      )}
    </ButtonsWrapper>
  );
};
export default Buttons;
