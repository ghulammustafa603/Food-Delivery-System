import Navbar from './components/Navbar';
import FoodList from './components/FoodList';
import Cart from './components/Cart';
import OrderForm from './components/OrderForm';
import Contact from './components/Contact';
import Receipt from './components/Receipt';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<FoodList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<OrderForm />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/receipt" element={<Receipt />} />
      </Routes>
    </>
  );
}

export default App;