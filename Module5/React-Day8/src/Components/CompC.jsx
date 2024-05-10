import React, { useContext } from 'react';
import { mycontext } from '../App';

const CompC = () => {
    const [contextValue,setContextValue] = useContext(mycontext)
    const handleSubmit = ()=>{
        if(contextValue>0){
            setContextValue(contextValue-1)
        }
    }
    return (
        <>
          <h1>Component C</h1>  
          <h1>The value is : {contextValue}</h1>
          <button onClick={handleSubmit}>Click</button>           
        </>
    );
};

export default CompC;