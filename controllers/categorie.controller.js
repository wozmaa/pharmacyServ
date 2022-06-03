const Categorie = require("../models/categorie.model");

module.exports.categorieController = {
  getCategories: async (req, res) => {
    try {
      const allCat = await Categorie.find({});
      res.json(allCat);
    } catch (e) {
      res.json(e);
    }
  },
  postCategories: async (req, res) => {
    try {
      const postCat = await Categorie.create({ name: req.body.name });
      res.json(postCat);
    } catch (e) {
      res.json(e);
    }
  },
  patchCategories: async (req, res) => {
    try {
      const patchCat = await Categorie.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
      });
    } catch (e) {
      res.json(e);
    }
  },
  deleteCategories: async (req, res) => {
    try {
      await Categorie.findByIdAndRemove(req.params.id);
      res.json("категория удалена");
    } catch (e) {
      res.json(e);
    }
  },
};
