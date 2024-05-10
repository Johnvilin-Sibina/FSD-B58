import React, { useContext } from 'react';
import { mycontext } from '../App';

const CompA = () => {
    const [contextValue,setContextValue] = useContext(mycontext)
    const handleSubmit = ()=>{
        setContextValue(contextValue+1)
    }
    return (
        <>
        <h1>Component A</h1>
        <h1>The value is: {contextValue}</h1> 
        <button onClick={handleSubmit}>Click</button>           
        </>
    );
};

export default CompA;