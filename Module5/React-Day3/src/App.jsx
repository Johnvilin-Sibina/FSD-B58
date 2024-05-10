import React from "react";
import ComponentB from "./Components/ComponentB/ComponentB";
import ComponentC from "./Components/ComponentC/ComponentC";
import ComponentA from "./Components/ComponentA/ComponentA";
import ComponentD from "./Components/ComponentD/ComponentD";

const App = () => {
  const a = 10;
  const arr = [1, 2, 3, 4, 5];
  const obj = {
    name: "test",
    age: 5,
  };
  const arrObj = [
    {
      id: 1,
      name: "Sibina",
      age: 25,
    },
    {
      id: 2,
      name: "Daniya",
      age: 19,
    },
    {
      id: 3,
      name: "Doyal",
      age: 19,
    }
  ];
  return (
    <>
      <h1>App Component</h1>
      <ComponentA a={a} arr={arr}/>
      <ComponentB obj={obj}/>
      <ComponentC arr={arr}/>
      <ComponentD arrObj={arrObj}/>
    </>
  );
};

export default App;
