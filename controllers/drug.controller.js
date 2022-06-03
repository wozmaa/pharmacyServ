const Drug = require("../models/drug.model");

module.exports.drugController = {
  getDrugs: async (req, res) => {
    try {
      const getD = await Drug.find({});
      res.json(getD);
    } catch (e) {
      res.json(e);
    }
  },
  getDrugByCategorie: async (req, res) => {
    try {
      const getByCat = await Drug.findById({ categorie: req.params.id });
      res.json(getByCat);
    } catch (e) {
      res.json(e);
    }
  },
  getDrugById: async (req, res) => {
    try {
      const getById = await Drug.findById(req.params.id);
      res.json(getById);
    } catch (e) {
      res.json(e);
    }
  },
  postDrug: async (req, res) => {
    try {
      const postD = Drug.create({
        name: req.body.name,
        price: req.body.price,
        categories: req.body.categories,
        recipe: req.body.recipe,
      });
      res.json(postD);
    } catch (e) {
      res.json(e);
    }
  },
  deleteDrug: async (req, res) => {
    try {
      Drug.findByIdAndRemove(req.params.id);
      res.json("лекарство удалено");
    } catch (e) {
      res.json(e);
    }
  },
  patchDrug: async (req, res) => {
    try {
      await Drug.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        price: req.body.price,
        categories: req.body.categories,
        recipe: req.body.recipe,
      });
      res.json("лекарство изменено");
    } catch (e) {
      res.json(e);
    }
  },
};
