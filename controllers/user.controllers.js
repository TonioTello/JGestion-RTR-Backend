"use strict";
//const User = require("../models/User.model");
const { User } = require("../models");
const bcrypt = require('bcryptjs');


const userCtrl = {};

userCtrl.pruebas = async (req, res) => {
    console.log("Hola Registrar User");
	res.status(200).send({
		massage: "Probando controlador User ffer",
	});
}

userCtrl.getUser = async( req , res ) =>{
    const user = await User.find();
    res.json(user);   
};

userCtrl.saveUser = async ( req , res ) =>{

	console.log("Hola Registrar User");
	const params = req.body;
	console.log(params);

    const user = new User ({
        nombre:  params.nombre,
        apellido: params.apellido,
        email:   params.email,
        password: params.password,
        cargo: params.cargo,
        rol: 'ROL_USER'
        
    });


    if(params.rol=='ROL_ADMIN'){
        user.rol = 'ROL_ADMIN';
    }


    if(params.password){

        const query = await User.findOne({ 'email': req.body. email});
        console.log(query);

        if(query){                       
            res.status(404).send({message:'Este correo ya se encuentra registrado. Ingrese otro nuevamente'});
        }        
        else {

            bcrypt.genSalt(10, function(err, salt) {
                bcrypt.hash(user.password, salt, function(err, hash) {
                    user.password = hash;

                    console.log("User after encrypt the passoword\n");
                    console.log(user);

                    // Store hash in your password DB.
                    if(err){
                        res.status(400).send({message:'Error al guardar usuario en la BD'});
                    }else{
                        user.save();    
                        res.json(user);          
                    }

                });
            });


        }  

    }else{
        res.status(400).send({message:'La contraseña no ha sido ingresada'});
    }
    


};


userCtrl.logingUser = async( req , res ) =>{    
      
      const email = req.body.email;
      const password = req.body.password;

      const query = await User.findOne({ 'email': req.body. email});

      if(query){ //Email esta en BD


        bcrypt.compare(password, query.password, function(err, check) {
            // res === true

            if(err){
                //res.status(400).send({message:'Error al consultar contraseña de usuario en la BD'});    

            }else{
                console.log("No hay error al consultar contraseña de usuario en la BD");  
                if(check){                    
                    console.log("El password es correcto");    
                    //res.status(200).send({message:'Logged correctamente...'});        
                    res.status(200).send(query);       
                }else{
                    res.status(404).send({message:'Contraseña incorrecta...'});
                }   
            }         
        });

      }else{
        res.status(404).send({message:'El correo no se encuentra registrado...'});
      }

     
};


module.exports = userCtrl;
