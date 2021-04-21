"use strict";

const express = require("express");
const server = express();
let EquipoController = require("../controllers/equipo.controllers");


let api = express.Router();

//api.get("/equipo/:subject?", EquipoController.getActivities);
api.get("/equipo-prueba", EquipoController.pruebas);
api.post("/registrar", EquipoController.saveEquipo);
api.get("/obtener", EquipoController.getEquipo);
api.post("/buscar", EquipoController.searchEquipo);


module.exports = api;