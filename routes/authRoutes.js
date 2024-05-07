// Importamos express y creamos un router.
const express = require("express");
const {validationResult, body} = require('express-validator');
const router = express.Router()

const authController = require("../controllers/authController")

// Rutas para al Auth del User.

router.post("/login",[
    body("email").not().isEmpty(),
    body("password").not().isEmpty()],authController.controller.login);
router.get("/logout", authController.controller.logout);

module.exports = router;