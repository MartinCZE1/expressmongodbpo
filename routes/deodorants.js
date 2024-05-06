const express = require("express");
const router = express.Router();

const deodorantsController = require("../controllers/deodorants");

/**
 * Get all deodorants
 * URL: /deodorants
 * Method: GET
 */
router.get("/", deodorantsController.getAllDeodorants);

/**
 * Get deodorant by id
 * URL: /deodorants/:id
 * Method: GET
 */
router.get("/:id", deodorantsController.getDeodorantById);

/**
 * Create deodorant
 * URL: /deodorants
 * Method: POST
 */
router.post("/", deodorantsController.createDeodorant);

/**
 * Update deodorant
 * URL: /deodorants/:id
 * Method: PUT
 */
router.put("/:id", deodorantsController.updateDeodorant);

/**
 * Patch deodorant
 * URL: /deodorants/:id
 * Method: PATCH
 */
router.patch("/:id", deodorantsController.patchDeodorant);

/**
 * Delete deodorant
 * URL: /deodorants/:id
 * Method: DELETE
 */
router.delete("/:id", deodorantsController.deleteDeodorant);

module.exports = router;
