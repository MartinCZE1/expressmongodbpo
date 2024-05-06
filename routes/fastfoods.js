const express = require("express");
const router = express.Router();

const fastfoodsController = require("../controllers/fastfoods");

/**
 * Get all fastfoods
 * URL: /fastfoods
 * Method: GET
 */
router.get("/", fastfoodsController.getAllFastfoods);

/**
 * Get fastfood by id
 * URL: /fastfoods/:id
 * Method: GET
 */
router.get("/:id", fastfoodsController.getFastfoodById);

/**
 * Create fastfood
 * URL: /fastfoods
 * Method: POST
 */
router.post("/", fastfoodsController.createFastfood);

/**
 * Update fastfood
 * URL: /fastfoods/:id
 * Method: PUT
 */
router.put("/:id", fastfoodsController.updateFastfood);

/**
 * Patch fastfood
 * URL: /fastfoods/:id
 * Method: PATCH
 */
router.patch("/:id", fastfoodsController.patchFastfood);

/**
 * Delete fastfood
 * URL: /fastfoods/:id
 * Method: DELETE
 */
router.delete("/:id", fastfoodsController.deleteFastfood);

module.exports = router;
