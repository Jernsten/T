import React from "react";

import CreateTab from "./CreateTab";
import DeleteTab from "./DeleteTab";

const renderTabs = ({tabs, setTabs}) =>
  tabs.map((tab) => (
    <li key={tab.title} style={{ border: "solid lightgreen" }}>
      <h3>{tab.title}</h3>
      <p>{tab.desc}</p>
      <DeleteTab tab={tab} setTabs={setTabs} />
    </li>
  ));

const TrolloList = (props) => {
  return (
    <div style={{ border: "solid lightblue" }}>
      <h2>{props.title}</h2>
      <ul>
        {renderTabs(props)}
        <CreateTab
          tabs={props.tabs}
          setTabs={props.setTabs}
          status={props.title}
        />
      </ul>
    </div>
  );
};

export default TrolloList;
