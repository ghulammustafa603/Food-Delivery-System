import React, { useState } from 'react';
import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom';

function OrderForm() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass order details to receipt page
    navigate('/receipt', {
      state: {
        name,
        address,
        cart,
        total: cart.reduce((sum, item) => sum + item.price, 0)
      }
    });
    clearCart();
  };

  return (
    <div className="card">
      <h2>Place Your Order</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" value={name} onChange={e => setName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Address:</label>
          <input type="text" value={address} onChange={e => setAddress(e.target.value)} required />
        </div>
        <button className="button" type="submit">Order Now</button>
      </form>
    </div>
  );
}

export default OrderForm;