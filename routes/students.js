const express = require("express");
const router = express.Router();

const studentsController = require("../controllers/students");

/**
 * Get all students
 * URL: /students
 * Method: GET
 */
router.get("/", studentsController.getAllStudents);

/**
 * Get student by id
 * URL: /students/:id
 * Method: GET
 */
router.get("/:id", studentsController.getStudentById);

/**
 * Create student
 * URL: /students
 * Method: POST
 */
router.post("/", studentsController.createStudent);

/**
 * Update student
 * URL: /students/:id
 * Method: PUT
 */
router.put("/:id", studentsController.updateStudent);

/**
 * Patch student
 * URL: /students/:id
 * Method: PATCH
 */
router.patch("/:id", studentsController.patchStudent);

/**
 * Delete student
 * URL: /students/:id
 * Method: DELETE
 */
router.delete("/:id", studentsController.deleteStudent);

module.exports = router;
