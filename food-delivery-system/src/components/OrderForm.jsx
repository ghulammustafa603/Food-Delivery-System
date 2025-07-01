import React from 'react';

function OrderForm() {
  return (
    <div>
      <h2>Place Your Order</h2>
      <form>
        <div>
          <label>Name:</label>
          <input type="text" required />
        </div>
        <div>
          <label>Address:</label>
          <input type="text" required />
        </div>
        <button type="submit">Order Now</button>
      </form>
    </div>
  );
}

export default OrderForm;