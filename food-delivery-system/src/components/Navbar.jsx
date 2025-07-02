import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/order">Order</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;