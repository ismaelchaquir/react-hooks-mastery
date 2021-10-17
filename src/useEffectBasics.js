import React, { useState, useEffect } from "react";

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (value > 1) {
      document.title = `New Message(${value})`;
    }
  });

  return (
    <>
      <h1>{value}</h1>
      <button className="button" onClick={() => setValue(value + 1)}>
        click me
      </button>
    </>
  );
};

export default UseEffectBasics;
