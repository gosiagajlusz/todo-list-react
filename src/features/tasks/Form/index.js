import { useState } from "react";
import { useRef } from "react";
import { FormWrapper, FormInput, AddButton } from "./styled";
import { useDispatch } from "react-redux";
import { addTask } from "../tasksSlice";
import { nanoid } from "@reduxjs/toolkit";

const Form = () => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const dispatch = useDispatch();
  const inputRef = useRef(null);

  const onFormSubmit = (event) => {
    event.preventDefault();
    const trimmedNewTaskContent = newTaskContent.trim();
    if (trimmedNewTaskContent !== "") {
      dispatch(
        addTask({ content: trimmedNewTaskContent, done: false, id: nanoid() })
      );
    }
    setNewTaskContent("");
    focusInput();
  };

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
