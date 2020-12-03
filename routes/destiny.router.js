const express = require('express');
const router = express.Router();

const queries = require('../controllers/destiny.controller.js');

router.get('/by-city/:cityId', queries.getDestinys);
router.get('/by-id/:destinyId', queries.getDestinyById);
router.get('/', queries.getAllDestinies);
router.post('/', queries.newDestiny);

module.exports = router;