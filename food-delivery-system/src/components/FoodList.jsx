import React from 'react';
import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom';

const sampleFoods = [
  { id: 1, name: 'Pizza', price: 10 },
  { id: 2, name: 'Burger', price: 7 },
  { id: 3, name: 'Sushi', price: 12 },
];

function FoodList() {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = (food) => {
    addToCart(food);
    navigate('/cart');
  };

  return (
    <div>
      <h2>Food Menu</h2>
      <div>
        {sampleFoods.map(food => (
          <div className="card" key={food.id}>
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