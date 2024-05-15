import React, { useEffect, useRef, useState } from "react";

const UseRefHook = () => {
  const [data, setData] = useState("");
  const myRef = useRef();
  const mineRef = useRef();
  useEffect(() => {
    myRef.current.focus();
  }, []);
  const handleClick = () => {
    //console.log(myRef.current.value);
    mineRef.current = myRef.current.value;
    setData((data)=>data+1)
  };
  return (
    <div>
      <h1>Using useRef hook</h1>
      <input type="text" placeholder="Enter your name" ref={myRef} />
      <button onClick={handleClick}>Click</button>
      {mineRef.current}
    </div>
  );
};

export default UseRefHook;
