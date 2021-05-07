import React, { useState } from "react";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const TabForm = ({status, setTabs, setActivated}) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleTitleChange = (value) => {
    setTitle(value);
  };

  const handleDescChange = (value) => {
    setDesc(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title !== "" || desc !== "") {
        const tab = { status: status, title: title, desc: desc };
        setTabs((prev) => [...prev, tab]);
    }
    setActivated(false)
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Label>
        Title:
        <Form.Control
          type="text"
          value={title}
          onChange={(e) => handleTitleChange(e.target.value)}
        />
      </Form.Label>
      <Form.Label>
        Description:
        <Form.Control
          type="text"
          value={desc}
          onChange={(e) => handleDescChange(e.target.value)}
        />
      </Form.Label>
      <Button type="submit" value="Submit">Add</Button>
    </Form>
  );
};

const CreateTab = ({setTabs, status}) => {
  const [activated, setActivated] = useState(false);

  if (!activated)
    return <Button onClick={() => setActivated(!activated)}>+</Button>;
  else
    return (
      <TabForm
        setTabs={setTabs}
        status={status}
        setActivated={setActivated}
      />
    );
};

export default CreateTab;
