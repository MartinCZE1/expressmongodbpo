const Car = require("../models/cars");

exports.getAllCars = async (req, res) => {
  try {
    const result = await Car.find();
    if (result && result.length !== 0) {
      return res.status(200).send({
        msg: "Cars were found",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Cars were not found",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getCarById = async (req, res) => {
  try {
    const result = await Car.findById(req.params.id);
    if (result) {
      return res.status(200).send({
        msg: "Car was found",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Car was not found",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.createCar = async (req, res) => {
  try {
    const data = new Car({
      brand: req.body.brand,
      model: req.body.model,
      color: req.body.color,
      price: req.body.price,
    });
    const result = await data.save();
    if (result) {
      return res.status(201).send({
        msg: "Car was created",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Car was not created",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateCar = (req, res) => {};

exports.patchCar = (req, res) => {};

exports.deleteCar = (req, res) => {};
