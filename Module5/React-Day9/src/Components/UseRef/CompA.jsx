import React, { useState } from "react";

const CompA = () => {
  const [data, setData] = useState("");
  const handleChange = (e) => {
    setData(e.target.value);
  };
  return (
    <div>
      <h1>Component Without useRef hook</h1>
      <input type="text" value={data} onChange={handleChange} />
      <br></br>
      {data}
    </div>
  );
};

export default CompA;
