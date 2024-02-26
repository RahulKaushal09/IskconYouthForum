const express = require("express");
const router = express.Router();
const DevoteeController = require("../controllers/devoteeController");

router.post('/getAllDevotees', DevoteeController.getAllDevotees);
router.post('/addDevotee', DevoteeController.addDevotee);

module.exports = router;
