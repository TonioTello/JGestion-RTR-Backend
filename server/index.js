const express = require("express");
const server = express();
const cors = require("cors");


//Middlewares
server.use(express.json()); //Tratar datos en formato json
server.use(express.static(__dirname + "/../public")); // acceder directamente a los directorios del proyectos, en este caso la carpeta public
server.use(cors());


let user_routes = require("../routes/user.routes");
let cliente_routes = require("../routes/cliente.routes");
let equipo_routes = require("../routes/equipo.routes");
let servicio_routes = require("../routes/servicio.routes");
let venta_routes = require("../routes/venta.routes");

server.use("/api/usuario", user_routes);
server.use("/api/cliente", cliente_routes);
server.use("/api/equipo", equipo_routes);
server.use("/api/servicio", servicio_routes);
server.use("/api/venta", venta_routes);

module.exports = server;
