import { useState } from "react";
import { useRef } from "react";
import { FormWrapper, FormInput, AddButton } from "./styled";

const Form = ({ addNewTask, inputRef, focusInput }) => {
  const [NewTaskContent, setNewTaskContent] = useState("");
  const onFormSubmit = (event) => {
    event.preventDefault();
    addNewTask(NewTaskContent.trim());
    setNewTaskContent("");
    focusInput();
  };

  return (
    <FormWrapper onSubmit={onFormSubmit}>
      <FormInput
        ref={inputRef}
        value={NewTaskContent}
        placeholder="Co jest do zrobienia?"
        onChange={(event) => setNewTaskContent(event.target.value)}
      />
      <AddButton>Dodaj zadanie</AddButton>
    </FormWrapper>
  );
};
export default Form;
