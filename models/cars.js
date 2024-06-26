const mongoose = require("mongoose");

const carSchema = mongoose.Schema({
  brand: { type: String, required: true },
  model: { type: String, required: true },
  color: { type: String, required: true },
  price: { type: Number, required: true },
});

module.exports = mongoose.model("Car", carSchema);
