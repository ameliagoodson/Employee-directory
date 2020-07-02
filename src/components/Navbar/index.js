import React from "react";
// import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-dark">
        <h3>Employee Directory</h3>
        <p className="navtext">
          Click on the columns to filter by heading or use the search box to
          narrow your results
        </p>
      </nav>
    </div>
  );
}

export default Navbar;
