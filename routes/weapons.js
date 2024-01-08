const express = require("express");
const router = express.Router();

const weaponsController = require("../controllers/weapons");

/**
 * Get all weapons
 * URL: /weapons
 * Method: GET
 */
router.get("/", weaponsController.getAllWeapons);

/**
 * Get car by id
 * URL: /weapons/:id
 * Method: GET
 */
router.get("/:id", weaponsController.getWeaponById);

/**
 * Create car
 * URL: /weapons
 * Method: POST
 */
router.post("/", weaponsController.createWeapon);

/**
 * Update car
 * URL: /weapons/:id
 * Method: PUT
 */
router.put("/:id", weaponsController.updateWeapon);

/**
 * Patch car
 * URL: /weapons/:id
 * Method: PATCH
 */
router.patch("/:id", weaponsController.patchWeapon);

/**
 * Delete car
 * URL: /weapons/:id
 * Method: DELETE
 */
router.delete("/:id", weaponsController.deleteWeapon);

module.exports = router;
