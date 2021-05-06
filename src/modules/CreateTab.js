import React, { useState } from "react";

const TabForm = (props) => {
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
        const tab = { status: props.status, title: title, desc: desc };
        props.setTabs((prev) => [...prev, tab]);
    }
    props.setActivated(false)
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => handleTitleChange(e.target.value)}
        />
      </label>
      <label>
        Description:
        <input
          type="text"
          value={desc}
          onChange={(e) => handleDescChange(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

const CreateTab = (props) => {
  const [activated, setActivated] = useState(false);

  if (!activated)
    return <button onClick={() => setActivated(!activated)}>+</button>;
  else
    return (
      <TabForm
        setTabs={props.setTabs}
        status={props.status}
        setActivated={setActivated}
      />
    );
};

export default CreateTab;
