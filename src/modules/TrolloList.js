import React from "react";

import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

import TrolloTab from "./TrolloTab";
import CreateTab from "./CreateTab";

const TrolloList = ({ title, tabs, setTabs }) => {
  return (
    <Col key={title}>
      <h2>{title}</h2>
      <ListGroup>
        {tabs.map((tab) => (
          <TrolloTab tab={tab} setTabs={setTabs} key={tab.title} />
        ))}
      </ListGroup>
      <CreateTab tabs={tabs} setTabs={setTabs} status={title} />
    </Col>
  );
};

export default TrolloList;
