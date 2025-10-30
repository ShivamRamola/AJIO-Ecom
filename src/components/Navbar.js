import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // import Link for client-side routing
const Navbar = () => {
  const [btnName, setBtnName] = useState("Light");
  useEffect(() => {}, []);
  return (
    <div
      className="navbar"
      style={{
        display: "flex",
        justifyContent: "space-between",
        borderBottom: "1px solid grey",
        backgroundColor: "lightgrey",
      }}
    >
      <h1>LOGO</h1>
      <ul className="menu-items">
        <li>
          {" "}
          <Link to="/men">MEN</Link>
        </li>
        <li>
          {" "}
          <Link to="/women">WOMEN</Link>
        </li>
        <li>
          {" "}
          <Link to="/kids">KIDS</Link>
        </li>
        <li>
          {" "}
          <Link to="/cart">CART</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
