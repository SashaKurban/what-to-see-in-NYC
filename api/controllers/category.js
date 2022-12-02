const express = require("express");
const router = express.Router();
const db = require("../models");
const { Category } = db;

// get all categories
router.get("/", (req, res) => {
    Category.findAll({}).then((allCategories) => res.json(allCategories));
});

// post a new category
router.post("/", (req, res) => {
  let { type } = req.body;
  Category.create({ type })
    .then((newCategory) => {
      res.status(201).json(newCategory);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});
  
// delete a category
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  Category.findByPk(id).then((category) => {
    if (!category) {
      return res.sendStatus(404);
    }
    category.destroy();
    res.sendStatus(204);
  });
});

module.exports = router;