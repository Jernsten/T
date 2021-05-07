import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

import CreateTab from "./CreateTab";
import DeleteTab from "./DeleteTab";

const renderTabs = (tabs, setTabs) => {
  return tabs.map((tab) => (
    <ListGroup.Item key={tab.title}>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{tab.title}</Card.Title>
          <Card.Text>{tab.desc}</Card.Text>
          <DeleteTab tab={tab} setTabs={setTabs} />
        </Card.Body>
      </Card>
    </ListGroup.Item>
  ));
};

const TrolloList = ({ title, tabs, setTabs }) => {
  return (
    <Col key={title}>
      <h2>{title}</h2>
      <ListGroup>
        {renderTabs(tabs, setTabs)}
        <CreateTab tabs={tabs} setTabs={setTabs} status={title} />
      </ListGroup>
    </Col>
  );
};

export default TrolloList;
