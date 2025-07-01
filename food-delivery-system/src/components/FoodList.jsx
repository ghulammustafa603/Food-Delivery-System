import React from 'react';

const sampleFoods = [
  { id: 1, name: 'Pizza', price: 10 },
  { id: 2, name: 'Burger', price: 7 },
  { id: 3, name: 'Sushi', price: 12 },
];

function FoodList() {
  return (
    <div>
      <h2>Food Menu</h2>
      <ul>
        {sampleFoods.map(food => (
          <li key={food.id}>
            {food.name} - ${food.price}
            {/* Add to Cart button will be added later */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FoodList;