"use strict";

const express = require("express");
const server = express();
let VentaController = require("../controllers/venta.controllers");


let api = express.Router();

//api.get("/venta/:subject?", VentaController.getActivities);
api.get("/venta-prueba", VentaController.pruebas);
api.post("/registrar", VentaController.saveVenta);
api.get("/obtener", VentaController.getVentas);
api.post("/buscar", VentaController.searchVenta);

module.exports = api;