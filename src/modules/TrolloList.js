import React, { useState } from "react";

import AddTab from "./AddTab";

const TrolloList = (props) => {

  return (
    <div style={{ border: "solid blue" }}>
      <h1 style={{ border: "solid red" }}>{props.title}</h1>
      <ul style={{ border: "solid green" }}>
      </ul>
      {/* <AddTab setTabs={setTabs} /> */}
    </div>
  );
};

export default TrolloList;
