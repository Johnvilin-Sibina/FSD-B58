import React, { useReducer } from "react";
import ReducerAction from "./ReducerAction";

const UseReducerHook = () => {
  const [state,dispatch] = useReducer(ReducerAction,0);

  return (
    <div>
      <h1>Using useReducer Hook</h1>
      {state}
      <button onClick={()=>{dispatch({type:"ADD",payload:10})}}>Add</button>
      <button onClick={()=>{dispatch({type:"SUB",payload:5})}}>Sub</button>
    </div>
  );
};

export default UseReducerHook;
