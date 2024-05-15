import React from 'react';
import CompA from './Components/UseRef/CompA';
import UseRefHook from './Components/UseRef/UseRefHook';
import UseReducerHook from './Components/UseReducer/UseReducerHook';

const App = () => {
  return (
    <div>
      <h1>App Component</h1>
      {/* <CompA />
      <UseRefHook /> */}
      <UseReducerHook />
    </div>
  );
};

export default App;