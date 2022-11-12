const express = require("express");
const router = express.Router();
const db = require("../models");
const { Event } = db;

// get all events
router.get("/", (req, res) => {
    Event.findAll({}).then((allEvents) => res.json(allEvents));
});

// post a new event
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

// update event
router.put("/:id", (req, res) => {
    let { title, description, address, date, price, link } = req.body;
    const { id } = req.params;
    Event.findByPk(id).then((event) => {
      if (!event) {
        return res.sendStatus(404);
      }
      event.title = title;
      event.address = address;
      event.description = description;
      event.date = date;
      event.price = price;
      event.link = link;

      event
        .save()
        .then((updatedEvent) => {
          res.json(updatedEvent);
        })
        .catch((err) => {
          res.status(400).json(err);
        });
    });
  });
  
// delete an event
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