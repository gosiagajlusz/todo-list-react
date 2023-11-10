import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { ButtonsWrapper, Button } from "./styled";
import { selectTasks, toggleHideDone, setAllDone } from "../tasksSlice";

const Buttons = () => {
  const {tasks,hideDone}= useSelector(selectTasks);
  const dispatch= useDispatch();
  return (
  <ButtonsWrapper>
    {tasks.length > 0 && (
      <>
        <Button  onClick={()=>dispatch(toggleHideDone())}>
          {hideDone ? "Pokaż" : "Ukryj"} ukończone
        </Button>
        <Button
          disabled={tasks.every(({ done }) => done)}
          onClick={()=>dispatch(setAllDone())}
        >
          Ukończ wszystkie
        </Button>
      </>
    )}
  </ButtonsWrapper>
);
};
export default Buttons;
