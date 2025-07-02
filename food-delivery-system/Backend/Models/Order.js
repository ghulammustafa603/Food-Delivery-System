const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  items: [
    {
      foodId: { type: mongoose.Schema.Types.ObjectId, ref: 'Food', required: true },
      name: String,
      price: Number,
      quantity: Number
    }
  ],
  customerName: { type: String, required: true },
  address: { type: String, required: true },
  total: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', orderSchema);