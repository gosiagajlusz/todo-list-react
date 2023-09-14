import React from 'react';
import "./style.css";
const Form = () => (
    <form className="section__form">

        <input className="section__input" placeholder="Co jest do zrobienia?" autofocus />
        <button className="section__addTaskButton">Dodaj zadanie</button>

    </form>
)
export default Form;
