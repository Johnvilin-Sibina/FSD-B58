import React, { createContext, useContext, useState } from 'react';
import CompA from './Components/CompA';
import CompB from './Components/CompB';
import CompC from './Components/CompC';
import UserProfile from './Components/UserProfile';

export const mycontext = createContext('');
const App = () => {
  const [contextValue,setContextValue] = useState(0);
  const [profile,setProfile] = useState("John Doe");
  return (
    <>
      <h1>App Component</h1>
      <h1>The value is : {contextValue}</h1>
      <mycontext.Provider value={[contextValue,setContextValue]}>
        <CompA />
        <CompB />
        <CompC />
      </mycontext.Provider>
      <mycontext.Provider value={[profile,setProfile]}>
        <UserProfile />
      </mycontext.Provider>
    </>
  );
};

export default App;