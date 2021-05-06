import React from "react";

import CreateTab from "./CreateTab";
import DeleteTab from "./DeleteTab";

const renderTabs = (tabs, setTabs) => {
  const handleClick = () => alert("yolo");

  return tabs.map((tab) => (
    <li
      key={tab.title}
      style={{ border: "solid lightgreen" }}
      onClick={handleClick}
    >
      <h3>{tab.title}</h3>
      <p>{tab.desc}</p>
      <DeleteTab tab={tab} setTabs={setTabs} />
    </li>
  ));
};

const TrolloList = ({ title, tabs, setTabs }) => {
  return (
    <div style={{ border: "solid lightblue" }}>
      <h2>{title}</h2>
      <ul>
        {renderTabs(tabs, setTabs)}
        <CreateTab tabs={tabs} setTabs={setTabs} status={title} />
      </ul>
    </div>
  );
};

export default TrolloList;
