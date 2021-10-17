import React, { useState } from "react";

const ErrorExample = () => {
  const [title, setTitle] = useState("random title");
  const handleClick = () => {
    if (title === "random title") {
      setTitle("new title");
    } else {
      setTitle("random title");
    }
  };
  return (
    <>
      <h2>{title}</h2>
      <button className="button" type="button" onClick={handleClick}>
        change title
      </button>
    </>
  );
};

export default ErrorExample;
