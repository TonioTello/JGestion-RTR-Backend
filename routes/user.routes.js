"use strict";

const express = require("express");
const server = express();
let UserController = require("../controllers/user.controllers");


let api = express.Router();

//api.get("/user/:subject?", UserController.getActivities);
api.get("/user-prueba", UserController.pruebas);
api.post("/registrar", UserController.saveUser);
api.post("/login", UserController.logingUser);
api.get("/obtener", UserController.getUser);


module.exports = api;