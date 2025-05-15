import React from "react";
import { Link } from "react-router-dom";

const navStyle = {
  display: "flex",
  gap: "1.5rem",
  padding: "1rem",
  background: "#f5f5f5",
  borderBottom: "1px solid #ddd",
};

function Navbar() {
  return (
    <nav style={navStyle}>
      <Link to="/">Home</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/about">About</Link>
      <Link to="/signup">Sign Up</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
}

export default Navbar;
