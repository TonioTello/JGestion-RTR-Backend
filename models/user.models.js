const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
	nombre: { type: String },
	apellido: { type: String },
	email: { type: String },
    password: { type: String },
    cargo: { type: String },
    rol: { type: String },
});

module.exports = mongoose.model("User", UserSchema);
