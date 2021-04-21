"use strict";

const express = require("express");
const server = express();
let ServicioController = require("../controllers/servicio.controllers");


let api = express.Router();

//api.get("/servicio/:subject?", ServicioController.getActivities);
api.get("/servicio-prueba", ServicioController.pruebas);
api.post("/registrar", ServicioController.saveServicio);
api.get("/obtener", ServicioController.getServicios);
api.post("/buscar", ServicioController.searchServicio);
api.put("/actualizar", ServicioController.updateServicio);

module.exports = api;