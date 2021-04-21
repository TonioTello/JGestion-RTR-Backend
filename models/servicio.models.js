const mongoose = require("mongoose");

mongoose.set('useFindAndModify', false);

const { Schema } = mongoose;

const ServicioSchema = new Schema({
	tipoServicio: { type: String },
    quienNotifica: { type: String },
    cargo: { type: String },
    telefono: { type: String },
    email: { type: String },
    fechaServicio: { type: String },
    quienRecibe: { type: String },
    quienEjecuta: { type: String },
    numeroOrden: { type: String },
    estadoFisico: { type: String },
    estadoFuncional: { type: String },
    tiempoEjecucion: { type: String },
    estado: { type: String },
    observaciones: { type: String },
    cliente: { type: String },
    equipo: { type: String },
    // cliente: { type: Schema.ObjectId, ref: "Cliente" },	
    // equipo: { type: Schema.ObjectId, ref: "Equipo" },
    
});

module.exports = mongoose.model("Servicio", ServicioSchema);
