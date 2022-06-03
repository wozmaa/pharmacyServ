const mongoose = require("mongoose");

const clientSchema = mongoose.Schema({
  name: String,
  kap: Number,
  hasRecipe: Boolean,
});

const Client = mongoose.model("Client", clientSchema);

module.exports = Client;