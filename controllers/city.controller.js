const CityModel = require('../models/city.model.js');

const CityController = {};

CityController.get = async (req, res) => {
  try {
    const cities = await CityModel.find({});
    res.json(cities);
  } catch (error) {
    console.log("Failed Getting Cities");
    res.status(500).json({
      error
    });
  }
}

CityController.post = async (req, res) => {
  try {
    let body = req.body;
    const city = new CityModel(body);
    const response = await city.save();
    res.json(response);
  } catch(error) {
    console.log("Failed posting cities");
    res.status(500).json({
      error
    })
  }
}

module.exports = CityController;