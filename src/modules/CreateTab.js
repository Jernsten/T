import React, { useState } from "react";

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

const CreateTab = ({setTabs, status}) => {
  const [activated, setActivated] = useState(false);

  if (!activated)
    return <button onClick={() => setActivated(!activated)}>+</button>;
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
