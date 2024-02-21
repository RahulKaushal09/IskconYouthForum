const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/authController");

router.post("/signIn", AuthController.login);
router.post("/", AuthController.userVerification);

module.exports = router;
