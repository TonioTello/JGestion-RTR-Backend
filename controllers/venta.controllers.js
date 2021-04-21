"use strict";
//const Venta = require("../models/Venta.model");
const { Venta } = require("../models");

const ventaCtrl = {};

ventaCtrl.pruebas = async (req, res) => {
	res.status(200).send({
		massage: "Probando controlador Venta ffer",
	});
}

ventaCtrl.getVentas = async( req , res ) =>{
    const venta = await Venta.find();
    res.json(venta);   
};

ventaCtrl.saveVenta = async ( req , res ) =>{

	console.log("Hola Registrar Venta");
	const params = req.body;
	console.log(params);

    const venta = new Venta ({
        nitCliente: params.nitCliente,
        nombreCliente: params.nombreCliente,
        nombreEquipo: params.nombreEquipo,
        numeroSerie: params.numeroSerie,
        numeroFactura: params.numeroFactura,
        cantidad: params.cantidad,
        vendedor: params.vendedor,
        fechaVenta: params.fechaVenta,
        fechaInstalacion: params.fechaInstalacion,
        responsableInstalacion: params.responsableInstalacion,
        observaciones: params.observaciones,
 
    });

     const query = await Venta.findOne({ 'numeroSerie': req.body. numeroSerie});
    console.log(query);
    
    if(query){                       
        res.status(404).send({message:'Este numero de numero serie ya se encuentra registrado. Ingrese otro nuevamente'});
    }        
    else {
        await venta.save();    
        res.json(venta);   
    }   


};

ventaCtrl.searchVenta = async( req , res ) =>{    

    const query = await Venta.findOne({ 'nit': req.body. nit});
    
    console.log(query);

    //query = query.nit.trim;
    
    if(query){                       
        res.status(200).send(query);       }        
    else {
        res.status(404).send({message:'Venta no se encuentra registrado. Registrarlo e intentar nuevamente'});
    }            

};


module.exports = ventaCtrl;
