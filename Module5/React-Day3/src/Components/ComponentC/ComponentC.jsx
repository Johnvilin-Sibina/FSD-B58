import React from "react";

const ComponentC = ({ arr }) => {
  const handleSubmit = () => {
    alert("I am Fine. Thanks for asking");
  };
  return (
    <>
      <h1>How are you?</h1>
      <button onClick={handleSubmit}>Click To Know</button>
      {arr.map((ele, index) => {
        return (
          <>
            <div key={index}>
              <h1>{ele}</h1>
            </div>
          </>
        );
      })}
    </>
  );
};

export default ComponentC;
