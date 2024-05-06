const mongoose = require("mongoose");

const fastfoodSchema = mongoose.Schema({
  company: { type: String, required: true },
  menu: { type: String, required: true },
  price: { type: Number, required: true },
});

module.exports = mongoose.model("Fastfood", fastfoodSchema);
