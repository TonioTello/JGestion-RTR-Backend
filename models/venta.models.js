const mongoose = require("mongoose");
const { Schema } = mongoose;

const VentaSchema = new Schema({
	nitCliente: { type: String },
    nombreCliente: { type: String },
    nombreEquipo: { type: String },
    numeroSerie: { type: String },
    numeroFactura: { type: String },
    cantidad: { type: String },
    vendedor: { type: String },
    fechaVenta: { type: String },
    fechaInstalacion: { type: String },
    responsableInstalacion: { type: String },
    observaciones: { type: String },    
});

module.exports = mongoose.model("Venta", VentaSchema);
