// import React, { useEffect, useState } from "react";

// const Api = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const jsonData = await res.json();
//     console.log(jsonData);
//     setData(jsonData);
//   };

//   return (
//     <>
//       <h1>Api Component</h1>
//       {data.map((element, index) => {
//         return (
//           <div key={element.id}>
//             <div>{element.id}</div>
//             <div>{element.title}</div>
//           </div>
//         );
//       })}
//     </>
//   );
// };

// export default Api;

import axios from "axios";
import React, { useState, useEffect } from "react";

const Api = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
   // getData();
   fetchData();
  }, []);

  //   const getData = async () => {
  //     try {
  //       const res = await fetch("https://restcountries.com/v3.1/all");
  //       const jsonData = await res.json();
  //       //console.log(jsonData);
  //       setData(jsonData);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  const fetchData = () => {
    const result = axios
      .get("https://restcountries.com/v3.1/all")
      .then((info) => setData(info))
      .catch((err) => console.log(err));
    console.log(result);
  };
  fetchData();
  return (
    <div>
      {data.map((element, index) => {
        return (
          <div key={index}>
            <h3>{element.name.common}</h3>
            <h4>{element.region}</h4>
            <h4>{element.subregion}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default Api;
