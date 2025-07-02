import React from 'react';
import { useLocation, Link } from 'react-router-dom';

function Receipt() {
  const location = useLocation();
  const { name, address, cart, total } = location.state || {};

  if (!cart || cart.length === 0) {
    return (
      <div className="card">
        <h2>No Order Found</h2>
        <Link className="button" to="/">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="card">
      <h2>Order Receipt</h2>
      <div style={{marginBottom: '1rem'}}><strong>Name:</strong> {name}</div>
      <div style={{marginBottom: '1rem'}}><strong>Address:</strong> {address}</div>
      <div style={{marginBottom: '1rem'}}><strong>Items:</strong>
        <ul style={{listStyle: 'none', padding: 0}}>
          {cart.map((item, idx) => (
            <li key={idx}>{item.name} - ${item.price} x {item.quantity || 1}</li>
          ))}
        </ul>
      </div>
      <div style={{fontWeight: 600, marginBottom: '1.5rem'}}>Total: ${total}</div>
      <Link className="button" to="/">Back to Home</Link>
    </div>
  );
}

export default Receipt; 