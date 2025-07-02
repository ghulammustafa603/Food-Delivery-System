import React from 'react';
import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

  const handleOrder = () => {
    navigate('/order');
  };

  if (cart.length === 0) {
    return (
      <div className="card">
        <h2>Your Cart</h2>
        <p style={{color: '#64748b'}}>Your cart is empty.</p>
      </div>
    );
  }

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="card">
      <h2>Your Cart</h2>
      <ul style={{listStyle: 'none', padding: 0, width: '100%'}}>
        {cart.map((item, idx) => (
          <li key={idx} style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.7rem'}}>
            <span>{item.name} - ${item.price}</span>
            <button className="button" style={{padding: '0.3rem 1rem', fontSize: '0.95rem'}} onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <div style={{margin: '1rem 0', fontWeight: 600}}>Total: ${total}</div>
      <button className="button" onClick={handleOrder}>Order</button>
    </div>
  );
}

export default Cart;
