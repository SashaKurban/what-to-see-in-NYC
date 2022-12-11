const express = require("express");
const router = express.Router();
const passport = require("../middlewares/authentication");
const db = require("../models");
const { Event, Category } = db;

// get all events
router.get("/", (req, res) => {
    Event.findAll({}).then((allEvents) => res.json(allEvents));
});

//get all events belonging to user
router.get("/my-events", passport.isAuthenticated(), (req, res) => {
  const user = req.user;
  user.getEvents().then((allEvents) => res.json(allEvents));
});

//get events by date 
router.get("/date/:date", (req, res) => {
  const {date}  = req.params;
  Event.findAll({
    where:{
      date: date,
    }
  }).then((allEvents) => res.json(allEvents));
});

//get all events belonging to a category type
router.get("/:type", async (req, res) => {
  const {type}  = req.params;
  let category = await Category.findOne({
    where:{
      type: type,
    }
  });
  Event.findAll({
    where:{
      CategoryId: category.id,
    }
  }).then((allEvents) => res.json(allEvents));
});


// post a new event
router.post("/", passport.isAuthenticated(),  async (req, res) => {
  let { title, description, address, date, price, link, type} = req.body;
  let userId = (req.user).id;
  let category = await Category.findOne({
    where:{
      type: type,
    }
  })
  Event.create({ title, description, address, date, price, link, UserId: userId, CategoryId: category.id})
    .then((newEvent) => {
      (req.user).addEvent(newEvent);
      res.status(201).json(newEvent);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// update event
router.put("/:id", passport.isAuthenticated(), async (req, res) => {
    let { title, description, address, date, price, link, type } = req.body;
    const { id } = req.params;
    let category = await Category.findOne({
      where:{
        type: type,
      }
    })
    Event.findByPk(id).then((event) => {
      if (!event) {
        return res.sendStatus(404);
      }else if(event.UserId != (req.user).id){
        return res.sendStatus(401);
      }
      event.title = title;
      event.address = address;
      event.description = description;
      event.date = date;
      event.price = price;
      event.link = link;
      event.CategoryId = category.id;
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
router.delete("/:id", passport.isAuthenticated(), (req, res) => {
  const { id } = req.params;
  Event.findByPk(id).then((event) => {
    if (!event) {
      return res.sendStatus(404);
    }else if(event.UserId != (req.user).id){
      return res.sendStatus(401);
    }
    event.destroy();
    res.sendStatus(204);
  });
});
module.exports = router;