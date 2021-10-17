import React, { useState } from "react";

function UseStateCounter() {
  const [value, setValue] = useState(0);
  const reset = () => {
    setValue(0);
  };
  const complexIncrease = () => {
    setTimeout(() => {
      //   setValue(value + 1);
      setValue((prevState) => prevState + 1);
    }, 2000);
  };
  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h2>regular counter</h2>
        <h1>{value}</h1>
        <button
          className="button"
          style={{ margin: "0 2rem" }}
          onClick={() => setValue(value + 1)}
        >
          +
        </button>
        <button
          className="button"
          style={{ margin: "0 2rem" }}
          onClick={() => reset()}
        >
          reset
        </button>
        <button className="button" onClick={() => setValue(value - 1)}>
          -
        </button>
      </section>

      <section style={{ margin: "4rem 0" }}>
        <h2>more complex counter</h2>
        <h1>{value}</h1>
        <button className="button" onClick={complexIncrease}>
          {" "}
          increase later
        </button>
      </section>
    </>
  );
}

export default UseStateCounter;
