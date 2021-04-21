const mongoose = require("mongoose");
const { Schema } = mongoose;

const EquipoSchema = new Schema({
	nombre: { type: String },
    serial: { type: String },
	marca: { type: String },
	modelo: { type: String },
	registro_invima: { type: String },
    vencimiento_invima: { type: String },
    proveedor: { type: String },
    pais_fabricacion: { type: String },
    garantia: { type: String },
    quien_recibe: { type: String },
    nombre_contacto: { type: String },
    email_contacto: { type: String },   
    cantidad_quipos: { type: Number },   
    fecha_compra : { type: String },
    fecha_venta : { type: String },
    observacion: { type: String },
});

module.exports = mongoose.model("Equipo", EquipoSchema);