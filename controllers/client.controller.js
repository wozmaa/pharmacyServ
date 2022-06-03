const Client = require("../models/client.model");
const Basket = require("../models/basket.model");

module.exports.clientController = {
  postClient: async (req, res) => {
    try {
      const clientP = await Client.create({
        name: req.body.name,
        kap: req.body.kap,
        hasRecipe: req.body.hasRecipe,
      });
      await Basket.create({
        drugId: req.body.drugId,
        clientId: client._id,
        sum: req.body.sum,
      });
      res.json(clientP);
    } catch (e) {
      res.json(e.message);
    }
  },
  deleteClient: async (req, res) => {
    try {
      await Client.findByIdAndRemove(req.params.id);
      res.json("клиент удален");
    } catch (e) {
      res.json(e);
    }
  },
  patchClient: async (req, res) => {
    try {
      const patchC = await Client.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        kap: req.body.kap,
        hasRecipe: req.body.hasRecipe,
      });
      res.json(patchC);
    } catch (e) {
      res.json(e);
    }
  },
  getClient: async (req, res) => {
    try {
      const getC = await Client.find({});
      res.json(getC);
    } catch (e) {
      res.json(e);
    }
  },
  buyDrugs: async (req, res) => {
    const basket = await Basket.findById(req.params.id);
    const client = await Client.findById(basket.clientId);
    if (client.kap > basket.sum) {
      await Client.findByIdAndUpdate(basket.clientId, {
        kap: client.kap - basket.sum,
      });
      await Basket.findByIdAndUpdate(req.params.id, {
        drugId: [],
        sum: 0,
      });
      res.json("товар куплен");
    } else {
      res.json("не хватает денег");
    }
  },
  takeKap: async (req, res) => {
    const client = await Client.findById(req.params.id);
    const sum = client.kap + req.body.params;
    await Client.findByIdAndUpdate(req.params.id, {
      kap: sum,
    });
  },
};
