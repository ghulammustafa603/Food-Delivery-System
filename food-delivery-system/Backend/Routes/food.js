const express = require('express');
const router = express.Router();
const Food = require('../Models/Food');

// Get all foods
router.get('/', async (req, res) => {
  const foods = await Food.find();
  res.json(foods);
});

// Add a new food
router.post('/', async (req, res) => {
  const { name, price, description, image } = req.body;
  const food = new Food({ name, price, description, image });
  await food.save();
  res.status(201).json(food);
});

module.exports = router;