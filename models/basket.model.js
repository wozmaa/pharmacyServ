const mongoose = require("mongoose");

const basketSchema = mongoose.Schema({
  drugId: [{
    ref: "Drug",
    type: mongoose.SchemaTypes.ObjectId,
  }],
  clientId: {
    ref: "Client",
    type: mongoose.SchemaTypes.ObjectId,
  },
  sum: {
      type: Number,
      default: 0
  },
});

const Basket = mongoose.model("Basket", basketSchema);

module.exports = Basket;
