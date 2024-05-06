const mongoose = require("mongoose");

const deodorantSchema = mongoose.Schema({
  brand: { type: String, required: true },
  duration: { type: String, required: true },
  price: { type: Number, required: true },
});

module.exports = mongoose.model("Deodorant", deodorantSchema);
