const mongoose = require("mongoose");

const drugSchema = mongoose.Schema({
  name: String,
  price: Number,
  categories: {
    ref: Categorie,
    type: mongoose.SchemaTypes.ObjectId,
  },
  recipe: Boolean,
});

const Drug = mongoose.model("Drug", drugSchema);

module.exports = Drug;
