import React from "react";

const CompD = ({ person, setPerson }) => {
  return (
    <>
      <h1>Component for array of objects</h1>
      {person.map((ele,index) => {
        return (
          <div key={ele.id}>
            {ele.name}
            {ele.age}
          </div>
        );
      })}
    </>
  );
};

export default CompD;
