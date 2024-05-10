import React, { useContext } from 'react';
import { mycontext } from '../App';

const UserProfile = () => {
    const [profile,setProfile] = useContext(mycontext)
    const handleSubmit = ()=>{
        setProfile("Johnvilin Sibina")
    }
    return (
        <>
          <h1>Component UserProfile</h1>  
          <h1>The name is : {profile}</h1>
          <button onClick={handleSubmit}>Click to Change Name</button>
        </>
    );
};

export default UserProfile;