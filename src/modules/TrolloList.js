import React from "react";

import AddTab from './AddTab'

const renderTabs = (tabs) =>
  tabs.map((tab) => (
    <li key={tab.title} style={{ border: "solid lightgreen" }}>
      <h3>{tab.title}</h3>
      <p>{tab.desc}</p>
    </li>
  ));

const TrolloList = (props) => {
  return (
    <div style={{ border: "solid lightblue" }}>
      <h2>{props.title}</h2>
      <ul>
        {renderTabs(props.tabs)}
        <AddTab setTabs={props.setTabs}/>
      </ul>
    </div>
  );
};

export default TrolloList;
