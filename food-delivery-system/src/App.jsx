import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import FoodList from './components/FoodList';
import Cart from './components/Cart';           // <-- Add this import
import OrderForm from './components/OrderForm'; // <-- Add this import

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<FoodList />} />
        <Route path="/cart" element={<Cart />} />           {/* Add this route */}
        <Route path="/order" element={<OrderForm />} />     {/* Add this route */}
      </Routes>
    </Router>
  );
}

export default App;