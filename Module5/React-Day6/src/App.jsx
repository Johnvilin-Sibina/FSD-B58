import React from "react";
import NavBar from "./Components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./Pages/Contact";
import Products from "./Pages/Products";
import About from "./Pages/About";
import Home from "./Pages/Home";
import PageNotFound from "./Pages/PageNotFound";
import ProductDetail from "./Pages/ProductDetail";
import Skills from "./Pages/Skills";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="*" element={<PageNotFound />} />

          <Route path="/about" element={<About />}>
            <Route path="skills" element={<Skills />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
