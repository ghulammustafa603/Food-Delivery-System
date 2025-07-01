import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '1rem', background: '#eee' }}>
      <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
      <Link to="/cart" style={{ marginRight: '1rem' }}>Cart</Link>
      <Link to="/order">Order</Link>
    </nav>
  );
}

export default Navbar;