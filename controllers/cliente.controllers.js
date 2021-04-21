"use strict";
//const Cliente = require("../models/Cliente.model");
const { Cliente } = require("../models");

const clienteCtrl = {};

clienteCtrl.pruebas = async (req, res) => {
	res.status(200).send({
		massage: "Probando controlador Cliente ffer",
	});
}

clienteCtrl.getClientes = async( req , res ) =>{
    const cliente = await Cliente.find();
    res.json(cliente);   
};

clienteCtrl.saveCliente = async ( req , res ) =>{

	console.log("Hola Registrar Cliente");
	const params = req.body;
	console.log(params);

    const cliente = new Cliente ({
        nit: params.nit,
        nombreRepresentante: params.nombreRepresentante,
        nombreContacto: params.nombreContacto,
        empresa: params.empresa,
        ciudad: params.ciudad,
        telefono1: params.telefono1,
        email1: params.email1,
        telefono2: params.telefono2,
        email2: params.email2,
        direccion: params.direccion,
        observaciones: params.observaciones

    });

    const query = await Cliente.findOne({ 'nit': req.body. nit});
    console.log(query);
    
    if(query){                       
        res.status(404).send({message:'Este nit ya se encuentra registrado. Ingrese otro nuevamente'});
    }        
    else {
        await cliente.save();    
        res.json(cliente);   
    }  

};

clienteCtrl.searchCliente = async( req , res ) =>{    

    const query = await Cliente.findOne({ 'nit': req.body. nit});
    
    console.log(query);

    //query = query.nit.trim;
    
    if(query){                       
        res.status(200).send(query);       }        
    else {
        res.status(404).send({message:'Cliente no se encuentra registrado. Registrarlo e intentar nuevamente'});
    }            

};


module.exports = clienteCtrl;
