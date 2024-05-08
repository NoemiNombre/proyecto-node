// Importamos express y creamos un router.
const express = require("express");
const {validationResult, body} = require('express-validator');
const router = express.Router()

const authController = require("../controllers/authController");
const middleware = require("../middleware/verifyToken");

// Rutas para al Auth del User.
// login
router.post("/login",[
    body("email").not().isEmpty(),
    body("password").not().isEmpty()],authController.controller.login);

// logout
router.post("/logout",middleware.tokenVerify, authController.controller.logout);

module.exports = router;