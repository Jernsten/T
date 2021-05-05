import React, { useState } from "react";
import TrolloList from "./TrolloList.js";

const [BACKLOG, TODO, INPROGRESS, DONE] = [
  "Backlog",
  "ToDo",
  "InProgress",
  "Done",
];

const Board = (props) => {
  const [tabs, setTabs] = useState([
    { status: BACKLOG, title: "t1", desc: "d1" },
    { status: TODO, title: "t2", desc: "d2" },
    { status: INPROGRESS, title: "t3", desc: "d3" },
    { status: DONE, title: "t4", desc: "d4" },
  ]);

  return (
    <div style={{ border: "solid black" }}>
      <h1>{props.title}</h1>

      {
        //För varje tab med 'Backlog' så ska vi skapa en TrolloList
      }
    </div>
  );
};

export default Board;
