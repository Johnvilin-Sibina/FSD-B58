/*import { useState } from "react";
import CompA from "./Components/CompA/CompA";
import CompB from "./Components/CompB/CompB";


function App() {
const a = 10; //Props

//state
const [value, setValue] = useState(0);
  return (
    <>
      <h1>Hello World</h1>
      <h3>The value of a from props is: {a}</h3>
      <h3>The value of a from state is: {value}</h3>
      <CompA a={a} />
      <CompB setValue={setValue} value={value}/>
    </>
  )
}

export default App */

/*import React, { useState } from 'react';
import CompA from './Components/CompA/CompA';

const App = () => {

  const [value, setValue] = useState(0);

  return (
    <div>
      <h1>The value is : {value}</h1>
      <CompA value={value} setValue={setValue}/>
    </div>
  );
};

export default App;*/

import React from 'react';
import CompC from './Components/CompC/CompC';
import { useState } from 'react';
import CompD from './Components/CompD/CompD';
const App = () => {
  let arr = [1,2,3,4,5]

  let data = [
    {
    id: 1,
    name:"John",
    age: 45
  },
  {
    id: 2,
    name:"Elisa",
    age: 20
  },
  {
    id: 3,
    name:"Adam",
    age: 10
  },
]

    const [arrValue, setArrValue] = useState(arr);

    const[person,setPerson]=useState(data)

  return (
   <>
   <h1>Hello World</h1>
   <CompC arrValue={arrValue} setArrValue={setArrValue} />
   <CompD person={person} setPerson={setPerson} />
   </>
  );
};

export default App;
