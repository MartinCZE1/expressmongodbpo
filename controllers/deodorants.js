const Deodorant = require("../models/deodorants");

exports.getAllDeodorants = async (req, res) => {
  try {
    const result = await Deodorant.find();
    if (result && result.length !== 0) {
      return res.status(200).send({
        msg: "Deodorants were found",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Deodorants were not found",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getDeodorantById = async (req, res) => {
  try {
    const result = await Deodorant.findById(req.params.id);
    if (result) {
      return res.status(200).send({
        msg: "Deodorant was found",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Deodorant was not found",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.createDeodorant = async (req, res) => {
  try {
    const data = new Deodorant({
      brand: req.body.brand,
      duration: req.body.duration,
      price: req.body.price,
    });
    const result = await data.save();
    if (result) {
      return res.status(201).send({
        msg: "Deodorant was created",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Deodorant was not created",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateDeodorant = async (req, res) => {
  try {
    const data = {
      brand: req.body.brand,
      duration: req.body.duration,
      price: req.body.price,
    };
    const result = await Deodorant.findByIdAndUpdate(req.params.id, data);
    if (result) {
      return res.status(200).send({
        msg: "Deodorant was updated",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Deodorant was not updated",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.patchDeodorant = async (req, res) => {
  try {
    const data = {};
    for (const ops of req.body) {
      data[ops.propName] = ops.value;
    }
    const result = await Deodorant.findByIdAndUpdate(req.params.id, data);
    if (result) {
      return res.status(200).send({
        msg: "Deodorant was patched",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Deodorant was not patched",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.deleteDeodorant = async (req, res) => {
  try {
    const result = await Deodorant.findByIdAndDelete(req.params.id);
    if (result) {
      return res.status(200).send({
        msg: "Deodorant was deleted",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Deodorant was not deleted",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};
