import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Peter",
    age: 24,
    message: "random message",
  });
  const changeMessage = () => {
    if (person.message === "random message") {
      setPerson({ ...person, message: "changed text" });
    } else {
      setPerson({ ...person, message: "random message" });
    }
  };

  return (
    <div>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className="button" onClick={changeMessage}>
        change message
      </button>
    </div>
  );
};

export default UseStateObject;
