const express = require('express');
const router = express.Router();

const CityController = require("../controllers/city.controller.js");

router.get("/", CityController.get);
router.post("/", CityController.post);

module.exports = router;