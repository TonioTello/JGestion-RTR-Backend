const mongoose = require("mongoose");
const { Schema } = mongoose;

const ClienteSchema = new Schema({
	nit: { type: String },
    nombreRepresentante: { type: String },
    nombreContacto: { type: String },
    empresa: { type: String },
	ciudad: { type: String },	
    telefono1: { type: String },
    email1: { type: String },
    telefono2: { type: String },
    email2: { type: String },
    direccion: { type: String },
    observaciones: { type: String },
    
});

module.exports = mongoose.model("Cliente", ClienteSchema);
