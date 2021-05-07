import React, { useState } from "react";

import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import DeleteTab from "./DeleteTab";

import { BACKLOG, TODO, INPROGRESS, DONE } from "./strings";

const TrolloTab = ({ tab, setTabs }) => {
  const [isChangeable, setIsChangeable] = useState(false);
  const [newStatus, setNewStatus] = useState(tab.status);
  const [newTitle, setNewTitle] = useState(tab.title);
  const [newDesc, setNewDesc] = useState(tab.desc);

  const handleStatusChange = (change) => setNewStatus(change);
  const handleTitleChange = (change) => setNewTitle(change);
  const handleDescChange = (change) => setNewDesc(change);

  const handleSave = (e) => {
    e.preventDefault();
    setTabs((prev) =>
      prev.map((t) => {
        if (JSON.stringify(t) === JSON.stringify(tab)) {
          t.status = newStatus;
          t.title = newTitle;
          t.desc = newDesc;
        }
        return t;
      })
    );
    setIsChangeable(false);
  };

  function truncateTitle20(string) {
    if (string.length > 20) {
      return string.substring(0, 20) + "...";
    } else {
      return string;
    }
  }

  return (
    <ListGroup.Item key={tab.title} onClick={() => setIsChangeable(true)}>
      <Card>
        <Card.Body>
          <Form onSubmit={handleSave}>
            <Card.Title>
              {isChangeable ? (
                <Form.Control
                  type="text"
                  value={newTitle}
                  onChange={(e) => handleTitleChange(e.target.value)}
                />
              ) : (
                truncateTitle20(tab.title)
              )}
            </Card.Title>
            <Card.Text>
              {isChangeable ? (
                <Form.Control
                  type="text"
                  value={newDesc}
                  onChange={(e) => handleDescChange(e.target.value)}
                />
              ) : (
                tab.desc
              )}
            </Card.Text>
            {isChangeable && (
              <Form.Control
                as="select"
                value={tab.status}
                onChange={(e) => handleStatusChange(e.target.value)}
              >
                <option>{BACKLOG}</option>
                <option>{TODO}</option>
                <option>{INPROGRESS}</option>
                <option>{DONE}</option>
              </Form.Control>
            )}
            {isChangeable && (
              <Button variant="success" type="submit">
                Save
              </Button>
            )}
            {isChangeable && <DeleteTab tab={tab} setTabs={setTabs} />}
          </Form>
        </Card.Body>
      </Card>
    </ListGroup.Item>
  );
};

export default TrolloTab;
