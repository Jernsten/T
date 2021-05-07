import React from "react";

import Button from "react-bootstrap/Button";

const DeleteTab = ({ tab, setTabs }) => {
  const handleClick = () =>
    setTabs((prev) =>
      prev.filter((t) => JSON.stringify(t) !== JSON.stringify(tab))
    );

  return <Button onClick={handleClick}>-</Button>;
};

export default DeleteTab;
