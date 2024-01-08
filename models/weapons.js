const mongoose = require("mongoose");

const weaponsSchema = mongoose.Schema({
  brand: { type: String, required: true },
  type: { type: String, required: true },
  color: { type: String, required: true },
  price: { type: Number, required: true },
});

module.exports = mongoose.model("Weapon", weaponsSchema);
