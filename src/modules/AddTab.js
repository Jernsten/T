import React, { useState } from "react";

import TabForm from "./TabForm.js";

const AddTab = (props) => {
  const [activated, setActivated] = useState(false);

  if (!activated)
    return <button onClick={() => setActivated(!activated)}>+</button>;
  else return <TabForm setTabs={props.setTabs} />;
};

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
    const tab = { title: title, desc: desc };
    props.setTabs((prevState) => {
      console.log("prevState", prevState);
    });
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

export default AddTab;
