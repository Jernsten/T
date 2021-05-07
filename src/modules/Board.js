import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import TrolloList from "./TrolloList";

import { TROLLO_TITLE, BACKLOG, TODO, INPROGRESS, DONE } from "./strings";

const exampleTabs = [
  { status: BACKLOG, title: "t1", desc: "d1" },
  { status: TODO, title: "t2", desc: "d2" },
  { status: INPROGRESS, title: "t3", desc: "d3" },
  { status: DONE, title: "t4", desc: "d4" },
  { status: BACKLOG, title: "t5", desc: "d5" },
];

const renderTrolloLists = (tabs, setTabs) => {
  const tabsOrdered = {};
  const statuses = [BACKLOG, TODO, INPROGRESS, DONE];

  for (const status of statuses) {
    tabsOrdered[status] = tabs.filter((tab) => tab.status === status);
  }

  const render = [];

  for (const list in tabsOrdered) {
    render.push(
      <TrolloList
        title={list}
        tabs={tabsOrdered[list]}
        setTabs={setTabs}
        key={list}
      />
    );
  }

  return render;
};

const Board = () => {
  const [tabs, setTabs] = useState(exampleTabs);

  return (
    <Container fluid>
      <Row>
        <h1>{TROLLO_TITLE}</h1>
      </Row>
      <Row>{renderTrolloLists(tabs, setTabs)}</Row>
    </Container>
  );
};

export default Board;
