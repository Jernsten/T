import React, { useState } from "react";

import TabForm from './TabForm.js';

const AddTab = (props) => {
  const [activated, setActivated] = useState(false);

  if (!activated)
    return <button onClick={() => setActivated(!activated)}>+</button>;
  else return <TabForm setTabs={props.setTabs} />;
};

export default AddTab;
