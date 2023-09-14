import React from 'react';
import "./style.css";

const Buttons = ({ tasks, hideDoneTasks }) => (

  <div className="buttons__headerButtons">
    {tasks.length > 0 && (<>
      <button className={"buttons__headerButtons__button"}>
        {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
      </button>
      <button className=
        "buttons__headerButtons__button"
        disabled={tasks.every(({ done }) => done)}
      >
        Ukończ wszystkie
      </button></>
    )
    }
  </div>
);






export default Buttons;
