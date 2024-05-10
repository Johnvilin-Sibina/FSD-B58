import React, { useState } from "react";

const CompB = ({ setValue, value }) => {
  const [status, setStatus] = useState(true);

  const handleInc = () => {
    setStatus(false);
    setValue((value) => value + 1);
  };
  const handleDec = () => {
    setStatus(true);
    if (value > 0) {
      setValue((value) => value - 1);
    }
  };
  return (
    <div>
      <h1>Component Using State</h1>
      <h3>The value of a is: {value}</h3>
      {status ? (
        <button onClick={handleInc}>Click to increment</button>
      ) : (
        <button onClick={handleDec}>Click to decrement</button>
      )}
      {/* <button onClick={handleInc}>Click to increment</button>
            <button onClick={handleDec}>Click to decrement</button> */}
    </div>
  );
};

export default CompB;
