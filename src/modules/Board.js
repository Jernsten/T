import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import TrolloList from "./TrolloList";

import {
  TROLLO_TITLE,
  BACKLOG,
  TODO,
  INPROGRESS,
  DONE,
  EXAMPLETABS,
} from "./strings";

const exampleTabs = [
  {
    status: BACKLOG,
    title: "Create Trollo Lists",
    desc:
      "In the main view, add 4 columns: Backlog, ToDo, InProgress and Done. Each column can be drag&drop to move orders. You are free to use any styling that is similar to trello.",
  },
  {
    status: TODO,
    title: "Add tabs",
    desc: "Within each column, you can add tabs.",
  },
  {
    status: INPROGRESS,
    title: "Add tab form",
    desc:
      "Adding tabs asks to input a title, a description and a image to upload.",
  },
  {
    status: DONE,
    title: "Title Truncation",
    desc: "In the main view the tabs have a title with maximum 20 characters.",
  },
  {
    status: BACKLOG,
    title: "Tabs are modifyable",
    desc:
      "In the main view once a tab is clicked, an overlay is shown with the title, description and the image(You can mock the image). The title and description are editable.",
  },
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
