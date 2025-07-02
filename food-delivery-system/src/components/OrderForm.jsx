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
    if (cart.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    fetch('http://localhost:5000/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        items: cart,
        customerName: name,
        address,
        total: cart.reduce((sum, item) => sum + item.price, 0)
      })
    })
      .then(res => res.json())
      .then(order => {
        navigate('/receipt', { state: {
          name: order.customerName || name,
          address: order.address || address,
          cart: order.items || cart,
          total: order.total
        }});
        clearCart();
      })
      .catch(() => alert('Order failed. Please try again.'));
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