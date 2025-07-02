const express = require('express');
const router = express.Router();
const Order = require('../Models/Order');

// Get all orders
router.get('/', async (req, res) => {
  const orders = await Order.find();
  res.json(orders);
});

// Place a new order
router.post('/', async (req, res) => {
  const { items, customerName, address, total } = req.body;
  const order = new Order({ items, customerName, address, total });
  await order.save();
  res.status(201).json(order);
});

module.exports = router;