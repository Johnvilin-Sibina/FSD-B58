import React, { useEffect, useState } from "react";

const Lifecycle = () => {
    const [value, setValue] = useState(0);
  //Mounting Phase:
  useEffect(() => {
    console.log("Mounting Phase");
    return()=>{
        console.log("Unmounting Phase");
    }
  }, [value]);
  return (
    <>
      <h1>Life Cycle Method Using useEffect</h1>
      <h3>{value}</h3>
      <button onClick={()=>{setValue(value+1)}}>Click</button>
    </>
  );
};

export default Lifecycle;
