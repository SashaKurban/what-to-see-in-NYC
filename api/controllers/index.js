const express = require("express");
const router = express.Router();

// Load each controller
const eventsController = require("./events.js");
const authController = require("./auth.js");
const categoryController = require("./category.js");

// Mount each controller under a specific route. These
// will be prefixes to all routes defined inside the controller
router.use("/events", eventsController);
router.use("/category", categoryController);
router.use("/auth", authController);

module.exports = router;
