const Weapon = require("../models/weapons");

exports.getAllWeapons = async (req, res) => {
  try {
    const result = await Weapon.find();
    if (result && result.length !== 0) {
      return res.status(200).send({
        msg: "weapons were found",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "weapons were not found",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getWeaponById = async (req, res) => {
  try {
    const result = await Weapon.findById(req.params.id);
    if (result) {
      return res.status(200).send({
        msg: "Weapon was found",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Weapon was not found",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.createWeapon = async (req, res) => {
  try {
    const data = new Weapon({
      brand: req.body.brand,
      type: req.body.type,
      color: req.body.color,
      price: req.body.price,
    });
    const result = await data.save();
    if (result) {
      return res.status(201).send({
        msg: "Weapon was created",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Weapon was not created",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateWeapon = async (req, res) => {
  try {
    const data = {
      brand: req.body.brand,
      type: req.body.type,
      color: req.body.color,
      price: req.body.price,
    };
    const result = await Weapon.findByIdAndUpdate(req.params.id, data);
    if (result) {
      return res.status(200).send({
        msg: "Weapon was updated",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Weapon was not updated",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.patchWeapon = async (req, res) => {
  try {
    const data = {};
    for (const ops of req.body) {
      data[ops.propName] = ops.value;
    }
    const result = await Weapon.findByIdAndUpdate(req.params.id, data);
    if (result) {
      return res.status(200).send({
        msg: "Weapon was patched",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Weapon was not patched",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.deleteWeapon = async (req, res) => {
  try {
    const result = await Weapon.findByIdAndDelete(req.params.id);
    if (result) {
      return res.status(200).send({
        msg: "Weapon was deleted",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Weapon was not deleted",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};
