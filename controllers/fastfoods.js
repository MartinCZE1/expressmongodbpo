const Fastfood = require("../models/fastfoods");

exports.getAllFastfoods = async (req, res) => {
  try {
    const result = await Fastfood.find();
    if (result && result.length !== 0) {
      return res.status(200).send({
        msg: "Fastfoods were found",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Fastfoods were not found",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getFastfoodById = async (req, res) => {
  try {
    const result = await Fastfood.findById(req.params.id);
    if (result) {
      return res.status(200).send({
        msg: "Fastfood was found",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Fastfood was not found",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.createFastfood = async (req, res) => {
  try {
    const data = new Fastfood({
      company: req.body.company,
      menu: req.body.menu,
      price: req.body.price,
    });
    const result = await data.save();
    if (result) {
      return res.status(201).send({
        msg: "Fastfood was created",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Fastfood was not created",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateFastfood = async (req, res) => {
  try {
    const data = {
      company: req.body.company,
      menu: req.body.menu,
      price: req.body.price,
    };
    const result = await Fastfood.findByIdAndUpdate(req.params.id, data);
    if (result) {
      return res.status(200).send({
        msg: "Fastfood was updated",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Fastfood was not updated",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.patchFastfood = async (req, res) => {
  try {
    const data = {};
    for (const ops of req.body) {
      data[ops.propName] = ops.value;
    }
    const result = await Fastfood.findByIdAndUpdate(req.params.id, data);
    if (result) {
      return res.status(200).send({
        msg: "Fastfood was patched",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Fastfood was not patched",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.deleteFastfood = async (req, res) => {
  try {
    const result = await Fastfood.findByIdAndDelete(req.params.id);
    if (result) {
      return res.status(200).send({
        msg: "Fastfood was deleted",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Fastfood was not deleted",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};
