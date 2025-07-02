import React, { useEffect, useState } from 'react';
import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom';

function FoodList() {
  const [foods, setFoods] = useState([]);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:5000/api/foods')
      .then(res => res.json())
      .then(data => setFoods(data));
  }, []);

  const handleAddToCart = (food) => {
    addToCart({
      ...food,
      foodId: food._id, // Ensure foodId is included for backend
      quantity: 1
    });
    navigate('/cart');
  };

  return (
    <div>
      <h2>Food Menu</h2>
      <div>
        {foods.map(food => (
          <div className="card" key={food._id}>
            <div style={{fontSize: '1.2rem', fontWeight: 500}}>{food.name}</div>
            <div style={{color: '#64748b', margin: '0.5rem 0'}}> ${food.price} </div>
            <button className="button" onClick={() => handleAddToCart(food)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FoodList;