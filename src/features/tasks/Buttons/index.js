import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { ButtonsWrapper, Button } from "./styled";
import { selectTasks, toggleHideDone } from "../tasksSlice";

const Buttons = ({    setAllDone }) => {
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
          onClick={setAllDone}
        >
          Ukończ wszystkie
        </Button>
      </>
    )}
  </ButtonsWrapper>
);
};
export default Buttons;
