const DestinyModel = require('../models/destiny.model');

const queries = {
  getDestinys: async (req, res) => {
    try {
      const {
        cityId
      } = req.params;

      DestinyModel.find({  cityId: cityId }).exec((error, destinies) => {
        if (error) {
          res.status(500).json({
            error
          });
        } else {
          res.json(destinies)
        }
      })
    } catch (error) {
      console.log(error);
    }
  },

  getAllDestinies: async (req, res) => {
    try {
      DestinyModel.find({}).exec((error, destinies) => {
        if (error) {
          res.status(500).json({
            error
          });
        } else {
          res.json(destinies)
        }
      })
    } catch (error) {
      console.log(error);
    }
  },

  getDestinyById: async (req, res) => {
    try {
      const {
        destinyId
      } = req.params;
      DestinyModel.find({
        _id: destinyId
      }).exec((error, destiny) => {
        if (error) {
          res.status(500).json({
            error
          });
        } else {
          res.json(destiny[0])
        }
      })
    } catch (error) {
      console.log(error);
    }
  },

  newDestiny: async (req, res) => {
    try {
      let newDestiny = {
        ...req.body,
      }
      const destiny = new DestinyModel(newDestiny);
      const response = await destiny.save();
      res.json(response);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = queries;