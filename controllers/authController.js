require('dotenv').config();
const authservice = require("../services/authService")

const User = require("../models/User");
const Sessions = require("../models/accesstoken")

const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken')

// Controlador para manejar la Autenticacion de Usuarios.
var controller = {
  login: function (req, res) {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).send({
        satus: 400,
        message: "valor requerido"
      })
    }

    var data = req.body;

    User.findOne({ email: data.email })
      .then(user => {
        if (data.password == user.password) {

          const payload = {
            usuario: user
          }

          let access_token = jwt.sign(payload, process.env.key, {
            expiresIn: '1d'
          });

          let today = new Date().toISOString();


          let update_session = {
            user: user.email,
            key: access_token,
            creationDate: today,
            expirationDate: '1d',
            active: true

          }

          Sessions.findOneAndUpdate({ user: user.email }, update_session, { upsert: true, new: true })
            .then(session => {
              if (!session) {
                return res.status(401).send({
                  status: 401,
                  message: "Session no encontrada",

                });
              }
              return res.status(200).send({
                satus: 200,
                message: "Login exitoso",
                token: access_token
              })

            })
            .catch(error => {
              console.error(error);
              return res.status(500).send({
                status: 500,
                message: "error detectado",
              });
            });

        } else {
          return res.status(400).send({
            satus: 400,
            message: "Datos no validos"
          })

        }

      })
      .catch(error => {
        return res.status(400).send({
          status: 400,
          message: "Datos no validos",

        });
      })

  },

  // Controlador para cerrar la sesion
  logout: function () {
    localStorage.removeItem("token");
    res.status(200).json({
      message: "Sesion cerrada exitosamente"
    });
  }

}

module.exports = {
  controller
}