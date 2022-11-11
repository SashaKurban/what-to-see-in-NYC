const express = require("express");
const router = express.Router();
const db = require("../models");
const { Event } = db;

router.get("/", (req, res) => {
    Event.findAll({}).then((allEvents) => res.json(allEvents));
});

router.post("/", (req, res) => {
  let { title, description, address, date, price, link } = req.body;

  Event.create({ title, description, address, date, price, link })
    .then((newEvent) => {
      res.status(201).json(newEvent);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});
  
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  Event.findByPk(id).then((event) => {
    if (!event) {
      return res.sendStatus(404);
    }
    event.destroy();
    res.sendStatus(204);
  });
});

module.exports = router;