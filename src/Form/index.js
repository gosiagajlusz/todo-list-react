import "./style.css";
import { useState } from "react";

const Form = ({ addNewTask, inputRef }) => {
  const [NewTaskContent, setNewTaskContent] = useState("");
  const onFormSubmit = (event) => {
    event.preventDefault();
    addNewTask(NewTaskContent.trim());
    setNewTaskContent("");
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <input
        // ref={inputRef}
        value={NewTaskContent}
        className="form__input"
        placeholder="Co jest do zrobienia?"
        autoFocus
        onChange={(event) => setNewTaskContent(event.target.value)}
      />
      <button className="form__addTaskButton">Dodaj zadanie</button>
    </form>
  );
};
export default Form;