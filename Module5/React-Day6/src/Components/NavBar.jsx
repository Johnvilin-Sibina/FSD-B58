import React from "react";
import { Link, NavLink } from "react-router-dom";


const NavBar = () => {
  return (
    <>
    <h1>NavBar</h1>
      <nav>
        {/* <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/products">Products</Link> */}
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/products">Products</NavLink>
      </nav>
    </>
  );
};

export default NavBar;
