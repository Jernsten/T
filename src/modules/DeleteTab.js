import React from "react";

const DeleteTab = ({ tab, setTabs }) => {
  const handleClick = () =>
    setTabs((prev) =>
      prev.filter((t) => JSON.stringify(t) !== JSON.stringify(tab))
    );

  return <button onClick={handleClick}>-</button>;
};

export default DeleteTab;
