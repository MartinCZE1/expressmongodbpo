const Student = require("../models/students");

exports.getAllStudents = async (req, res) => {
  try {
    const result = await Student.find();
    if (result && result.length !== 0) {
      return res.status(200).send({
        msg: "Students were found",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Students were not found",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getStudentById = async (req, res) => {
  try {
    const result = await Student.findById(req.params.id);
    if (result) {
      return res.status(200).send({
        msg: "Student was found",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Student was not found",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.createStudent = async (req, res) => {
  try {
    const data = new Student({
      name: req.body.name,
      isic: req.body.isic,
      classroom: req.body.classroom,
    });
    const result = await data.save();
    if (result) {
      return res.status(201).send({
        msg: "Student was created",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Student was not created",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateStudent = async (req, res) => {
  try {
    const data = {
      name: req.body.name,
      isic: req.body.isic,
      classroom: req.body.classroom,
    };
    const result = await Student.findByIdAndUpdate(req.params.id, data);
    if (result) {
      return res.status(200).send({
        msg: "Student was updated",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Student was not updated",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.patchStudent = async (req, res) => {
  try {
    const data = {};
    for (const ops of req.body) {
      data[ops.propName] = ops.value;
    }
    const result = await Student.findByIdAndUpdate(req.params.id, data);
    if (result) {
      return res.status(200).send({
        msg: "Student was patched",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Student was not patched",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.deleteStudent = async (req, res) => {
  try {
    const result = await Student.findByIdAndDelete(req.params.id);
    if (result) {
      return res.status(200).send({
        msg: "Student was deleted",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Student was not deleted",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};
