/* import React from 'react';

const CompA = ({a}) => {
    const handleSubmit=()=>{
        a=a+1;
    }
    return (
        <div>
           <h1>Component A</h1>
           <h3>The value of a is: {a+1}</h3>
           <button onClick={handleSubmit}>Click</button>
        </div>
    );
};

export default CompA; */

//Done by me
/*import React from 'react';

const CompA = ({value, setValue}) => {

    const handleIncrement=()=>{
        setValue((value)=>value+1);
    } 
    const handleDecrement=()=>{
        if(value>0){
            setValue((value)=>value-1);
        }
    }  
     return (
        <>
        <button onClick={handleIncrement}>Click To Increment</button>
        <button onClick={handleDecrement}>Click To Decrement</button>
        </>
    );
};

export default CompA;*/
