import React from 'react';

const CompC = ({arrValue, setArrValue}) => {
    const handleRemove=(indexPos)=>{
      setArrValue((arrValue)=>arrValue.filter((element,index)=>index !==indexPos))  
    }
    return (
        <>
        <h1>Component for array using state</h1>
        {
            arrValue.map((ele,index)=>{
               return(
                <>
                <div key={index}>
                    <h3>{ele}</h3>
                    <button onClick={()=>{handleRemove(index)}}>Remove</button>
                </div>
                </>
               )
            })
        }
        </>
    );
};

export default CompC;