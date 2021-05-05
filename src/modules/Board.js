import React, { useState } from "react";
import TrolloList from "./TrolloList";

const [BACKLOG, TODO, INPROGRESS, DONE] = [
  "Backlog",
  "ToDo",
  "InProgress",
  "Done",
];

const exampleTabs = [
  { status: BACKLOG, title: "t1", desc: "d1" },
  { status: TODO, title: "t2", desc: "d2" },
  { status: INPROGRESS, title: "t3", desc: "d3" },
  { status: DONE, title: "t4", desc: "d4" },
];

const createTrolloLists = (tabs) => {
  const status = [BACKLOG, TODO, INPROGRESS, DONE];
  return status.map((s) =>
    tabs.filter((t) => t.status === s).map((t) => <TrolloList title={s} />)
  );
};

const Board = (props) => {
  const [tabs] = useState(exampleTabs);

  return (
    <div style={{ border: "solid black" }}>
      <h1>{props.title}</h1>
      {createTrolloLists(tabs)}
    </div>
  );
};

export default Board;
