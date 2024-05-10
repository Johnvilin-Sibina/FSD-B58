import React from 'react';
import "./ComponentB.css";

const ComponentB = ({obj}) => {
    return (
        <>
        <h1 className='head'>Hello</h1>  
        <h2>Name:{obj.name}</h2>
        <h2>Age:{obj.age}</h2>          
        </>
    );
};

export default ComponentB;