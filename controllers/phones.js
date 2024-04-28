const Phone = require("../models/phones");

exports.getAllPhones = async (req, res) => {
  try {
    const result = await Phone.find();
    if (result && result.length !== 0) {
      return res.status(200).send({
        msg: "Phones were found",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Phones were not found",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getPhoneById = async (req, res) => {
  try {
    const result = await Phone.findById(req.params.id);
    if (result) {
      return res.status(200).send({
        msg: "Phone was found",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Phone was not found",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.createPhone = async (req, res) => {
  try {
    const data = new Phone({
      brand: req.body.brand,
      os: req.body.os,
      color: req.body.color,
      price: req.body.price,
    });
    const result = await data.save();
    if (result) {
      return res.status(201).send({
        msg: "Phone was created",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Phone was not created",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updatePhone = async (req, res) => {
  try {
    const data = {
      brand: req.body.brand,
      model: req.body.model,
      color: req.body.color,
      price: req.body.price,
    };
    const result = await Phone.findByIdAndUpdate(req.params.id, data);
    if (result) {
      return res.status(200).send({
        msg: "Phone was updated",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Phone was not updated",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.patchPhone = async (req, res) => {
  try {
    const data = {};
    for (const ops of req.body) {
      data[ops.propName] = ops.value;
    }
    const result = await Phone.findByIdAndUpdate(req.params.id, data);
    if (result) {
      return res.status(200).send({
        msg: "Phone was patched",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Phone was not patched",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.deletePhone = async (req, res) => {
  try {
    const result = await Phone.findByIdAndDelete(req.params.id);
    if (result) {
      return res.status(200).send({
        msg: "Phone was deleted",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Phone was not deleted",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};
