import axios from "axios";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";

const App = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    await axios
      .get("https://6642ed793c01a059ea20d240.mockapi.io/api/users")
      .then((res) => setData(res.data))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
     <BrowserRouter>
     <Navbar />
     <Routes>
      <Route path={"/"} element={<Home data={data} />}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
};

export default App;
