const express = require("express");
const router = express.Router();

const phonesController = require("../controllers/phones");

/**
 * Get all phones
 * URL: /phones
 * Method: GET
 */
router.get("/", phonesController.getAllPhones);

/**
 * Get phone by id
 * URL: /phones/:id
 * Method: GET
 */
router.get("/:id", phonesController.getPhoneById);

/**
 * Create phone
 * URL: /phones
 * Method: POST
 */
router.post("/", phonesController.createPhone);

/**
 * Update phone
 * URL: /phones/:id
 * Method: PUT
 */
router.put("/:id", phonesController.updatePhone);

/**
 * Patch phone
 * URL: /phones/:id
 * Method: PATCH
 */
router.patch("/:id", phonesController.patchPhone);

/**
 * Delete phone
 * URL: /phones/:id
 * Method: DELETE
 */
router.delete("/:id", phonesController.deletePhone);

module.exports = router;
