import React, { useState } from "react";

const TabForm = (props) => {
  const [tabData, setTabData] = useState({ title: "", description: "" });

  const handleChange = (e) => {
    setTabData({ title: e.title, description: e.description });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setTabs();
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={tabData.title} onChange={handleChange} />
      </label>
      {/* <label>
        Description:
        <input type="text" value={description} onChange={handleChange} />
      </label> */}
    </form>
  );
};

export default TabForm;
