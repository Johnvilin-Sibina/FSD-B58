import React from 'react';

const ComponentA = ({a}) => {
    return (
        <>
        <h1 style={{color:"red"}}>Hi!</h1>
        <h2>The value of a is: {a}</h2>        
        </>
    );
};

export default ComponentA;