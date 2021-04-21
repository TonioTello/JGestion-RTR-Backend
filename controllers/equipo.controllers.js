"use strict";
//const Equipo = require("../models/Equipo.model");
const { Equipo } = require("../models");

const equipoCtrl = {};

equipoCtrl.pruebas = async (req, res) => {
	res.status(200).send({
		massage: "Probando controlador Equipo ffer",
	});
}

equipoCtrl.getEquipo = async( req , res ) =>{
    const equipo = await Equipo.find();
    res.json(equipo);   
};

equipoCtrl.saveEquipo = async ( req , res ) =>{

	console.log("Hola Registrar Equipo");
	const params = req.body;
	console.log(params);

    const equipo = new Equipo ({
        nombre: params.nombre,
        serial: params.serial,
        marca: params.marca,
        modelo: params.modelo,
        registro_invima: params.registro_invima,
        vencimiento_invima: params.vencimiento_invima,
        proveedor: params.proveedor,
        pais_fabricacion: params.pais_fabricacion,
        garantia: params.garantia,
        quien_recibe: params.quien_recibe,
        nombre_contacto: params.nombre_contacto,
        email_contacto: params.email_contacto,
        cantidad_quipos: params.cantidad_quipos,
        fecha_compra: params.fecha_compra,
        fecha_venta: params.fecha_venta,
        observaciones: params.observaciones

    });

    const query = await Equipo.findOne({ 'serial': req.body. serial});
    console.log(query);
    
    if(query){                       
        res.status(404).send({message:'Este Equipo ya se encuentra registrado. Ingrese otro nuevamente'});
    }        
    else {
        await equipo.save();    
        res.json(equipo);   
    }  

};

equipoCtrl.searchEquipo = async( req , res ) =>{    

    const query = await Equipo.findOne({ 'serial': req.body. serial});
    
    console.log(query);

    //query = query.nit.trim;
    
    if(query){                       
        res.status(200).send(query);       }        
    else {
        res.status(404).send({message:'Equipo no se encuentra registrado.'});
    }            

};


module.exports = equipoCtrl;
