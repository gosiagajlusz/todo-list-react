import { useState } from "react";
import { useRef } from "react";
import { FormWrapper, FormInput, AddButton } from "./styled";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const onFormSubmit = (event) => {
    event.preventDefault();
    addNewTask(newTaskContent.trim());
    setNewTaskContent("");
    focusInput();
  };

  const inputRef = useRef(null);
  const focusInput = () => {
    inputRef.current.focus();
  };
  return (
    <FormWrapper onSubmit={onFormSubmit}>
      <FormInput
        ref={inputRef}
        value={newTaskContent}
        placeholder="Co jest do zrobienia?"
        onChange={(event) => setNewTaskContent(event.target.value)}
      />
      <AddButton>Dodaj zadanie</AddButton>
    </FormWrapper>
  );
};
export default Form;
