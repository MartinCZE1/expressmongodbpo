const mongoose = require("mongoose");

const phoneSchema = mongoose.Schema({
  brand: { type: String, required: true },
  os: { type: String, required: true },
  color: { type: String, required: true },
  price: { type: Number, required: true },
});

module.exports = mongoose.model("Phone", phoneSchema);
